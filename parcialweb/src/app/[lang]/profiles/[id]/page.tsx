import { getProfileByID } from "@/services/api"
import Image from "next/image"
import { getDictionary } from "../../dictionaries";
import { Metadata } from "next";

type House = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'NoHouse';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {

  const { id } = await params

  const character = await getProfileByID(id)

  return {
    title: `Detalle de ${character.name} - HarryPotterApp`,
    description:
      "Consulta información detallada de cada personaje del mundo mágico."
  }
}
const BorderColorHouses = {
  Gryffindor: 'border-[#740001]',
  Slytherin: 'border-[#1A472A]',
  Ravenclaw: 'border-[#0E1A40]',
  Hufflepuff: 'border-[#FFD800]',
  NoHouse: 'border-[#D1D5DB]',
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ lang: "en" | "es"; id: string }>
}) {

  const { id, lang } = await params

  const profile = await getProfileByID(id)

  if (!profile) {
    return <div className="text-center py-20">Character not found</div>
  }

  const dict = await getDictionary(lang)

  const house = (profile.house as House) || "NoHouse"
  const border = BorderColorHouses[house]

  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl text-center font-bold text-amber-400 mb-6">
        {profile.name}
      </h2>

      <div className={`rounded-xl border-4 ${border} grid grid-cols-1 md:grid-cols-2 items-center`}>

        <div className="p-8 flex flex-col justify-center gap-3 text-lg text-black">
          <p><span className="font-bold">{dict.profile.houseL}:</span> {profile.house}</p>
          <p><span className="font-bold">{dict.profile.genderL}:</span> {profile.gender}</p>
          <p><span className="font-bold">{dict.profile.Wand.core}:</span> {profile.wand?.core ?? dict.profile.NA}</p>
          <p><span className="font-bold">{dict.profile.Wand.wood}:</span> {profile.wand?.wood ?? dict.profile.NA}</p>
          <p><span className="font-bold">{dict.profile.Wand.length}:</span> {profile.wand?.length ?? dict.profile.NA}</p>
        </div>

        <div className="flex items-center justify-center bg-white p-4 relative h-[420px]">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  )
}
