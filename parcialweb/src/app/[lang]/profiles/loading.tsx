import { getDictionary } from "../dictionaries"

export default async function Loading({params,}: { params: { lang: "en" | "es" } }) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    return (
    <main>
        <h1>{dict.home.description}</h1>
    </main>
    )
}