import { getProfileByID } from "@/services/api"
import Image from "next/image"
import { getDictionary } from "../../dictionaries";
import { Metadata} from "next";

export async function generateMetadata(
    name: string,
): Promise<Metadata> {
    return {
        title: "Detalle de" + name + "HarryPotterApp",
        description: "Consulta información detallada de cada personaje del mundo mágico: casa, actor/actriz, varita, especie, ascendencia y otros datos relevante."
    }
}

export default async function ProfilePage({params,}: { params: { lang: "en" | "es" ; id: string}}) {
  const profile = await getProfileByID(params.id)

  const { lang } = await params
  
  const dict = await getDictionary(lang)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{profile.name}</h1>

      <Image
        src={profile.image}       // URL de la imagen
        alt={profile.name}        // Texto alternativo
        width={300}                 // Ancho
        height={300}                // Alto 
        className="rounded-lg"      // Clases Tailwind
      />
      <p>{dict.profile.nameL} {profile.name}</p>
      <p>{dict.profile.genderL} {profile.gender}</p>
      <p>{dict.profile.houseL} {profile.house}</p>
    </div>
  )
}