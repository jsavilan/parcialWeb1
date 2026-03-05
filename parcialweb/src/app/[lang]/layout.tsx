import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listado de personajes - HarryPotterApp",
  description: "Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params
  const max = 12;

  return (
    <html lang={lang}>
      <body>
        <header>

        </header>
        <main>
          {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  )
}