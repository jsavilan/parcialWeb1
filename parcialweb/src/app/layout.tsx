import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parcial Web jsavilan",
  description: "Parcial web 1 de Juan Sebastián Ávila Nivia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
