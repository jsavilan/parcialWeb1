import Header from "./components/header";
import Footer from "./components/footer";
import "../globals.css"

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
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang}></Header>
        <main className="bg-[var(--main-bg)]">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}