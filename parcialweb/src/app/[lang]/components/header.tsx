import 'server-only'
import Link from "next/link"
import Image from "next/image"

export default async function header({ lang }: { lang: string }) {
  return (
    <header className="bg-[var(--header-bg)]">
      <div className="max-w-6xl mx-auto py-6 text-center flex flex-col items-center text-white">
        <Link href={`/${lang}/profiles`}>
          <Image
            src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"      // URL de la imagen
            alt="Logo principal"      // Texto alternativo
            width={300}                 // Ancho
            height={300}                // Alto
          >
          </Image>
        </Link>
        <div className="mt-2 text-sm">
          <Link href={`/en/profiles`} className={lang === 'en' ? 'font-bold' : ''}>
            EN
          </Link>
          <span>   </span>
          <Link href={`/es/profiles`} className={lang === 'es' ? 'font-bold' : ''}>
            ES
          </Link>
        </div>
      </div>
    </header>
  );
}