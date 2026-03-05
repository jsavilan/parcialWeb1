import { getDictionary } from "../dictionaries"
import { getProfiles } from "@/services/api"

//Colores del Background para Tailwind
const BgColorHouses = {
    Gryffindor: 'bg-[#740001]',
    Slytherin: 'bg-[#1A472A]',
    Ravenclaw: 'bg-[#0E1A40]',
    Hufflepuff: 'bg-[#FFD800]',
    NoHouse: 'bg-[#D1D5DB]',
}

//Colores del Border para Tailwind
const BorderColorHouses = {
    Gryffindor: 'border-[#740001]',
    Slytherin: 'border-[#1A472A]',
    Ravenclaw: 'border-[#0E1A40]',
    Hufflepuff: 'border-[#FFD800]',
    NoHouse: 'border-[#D1D5DB]',
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const profiles = await getProfiles()

  return (
       <div className="grid grid-cols-3">
            <h1 className="text-2xl font-bold">{dict.home.title}</h1>
            <h1 className="text-2xl font-bold">{dict.home.description}</h1>
        </div>
  )
}