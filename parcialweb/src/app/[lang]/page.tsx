import { getDictionary } from "./dictionaries"

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
    </main>
  )
}