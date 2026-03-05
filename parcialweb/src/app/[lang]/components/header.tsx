import 'server-only'
import Link from "next/link"
import Image from "next/image"

export default async function header({params,
}: {
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params
    return (
    <div className="grid grid-cols-3">
        <Link href={`/${lang}/profiles`}>
            <Image
              src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"      // URL de la imagen
              alt="Logo principal"      // Texto alternativo
              width={300}                 // Ancho
              height={300}                // Alto 
              className="rounded-lg"      // Clases Tailwind
            >
            </Image>
        </Link>
        <Link href={`/en/profiles`}>
        en
        </Link>
        <Link href={`/es/profiles`}>
        es
        </Link>
    </div>
    )
}