import { getDictionary } from "./dictionaries"
import Link from "next/link"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params

  const dict = await getDictionary(lang)

  return (
    <main>
      <h1>{dict.home.title}</h1>

      <p>{dict.home.description}</p>

      <Link href={`/${lang}/profiles`}>
        {dict.profile.title}
      </Link>
    </main>
  )
}