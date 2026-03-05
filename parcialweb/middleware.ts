import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "es"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`)
  )

  if (pathnameHasLocale) return

  // revisamos si el usuario ya tiene algo de preferencias
  const cookieLocale = request.cookies.get("locale")?.value

  if (cookieLocale && locales.includes(cookieLocale)) {
    request.nextUrl.pathname = `/${cookieLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  // sino lo hacemos con accept language del header de peticion
  const acceptLang = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0]

  const locale = locales.includes(acceptLang || "")
    ? acceptLang
    : defaultLocale

  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next).*)"],
}