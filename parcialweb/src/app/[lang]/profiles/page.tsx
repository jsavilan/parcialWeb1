import { Metadata } from "next";
import { getProfiles } from "@/services/api";
import CharacterList from "../components/characterList";
import { getDictionary } from "../dictionaries";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export const metadata: Metadata = {
  title: "Listado de personajes - HarryPotterApp",
  description: "Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales",
};

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" }> }) {
  const characters = await getProfiles(12);
  
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <section className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl text-center font-bold text-amber-400 mb-4">{dict.home.title}</h1>
      <p className="text-center mb-8">{dict.home.description}</p>
      <CharacterList characters={characters} lang={lang} />
    </section>
  );
}