import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "es"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0]

  const selectedLocale = locales.includes(locale || "")
    ? locale
    : defaultLocale

  request.nextUrl.pathname = `/${selectedLocale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next).*)"],
}