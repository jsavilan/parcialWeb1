import React from "react"

export default function ProfilesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full py-10">
        {children}
    </section>
  )
}