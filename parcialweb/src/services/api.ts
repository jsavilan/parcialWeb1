export async function getProfiles() {
    const response = await fetch("https://hp-api.onrender.com/api/characters")

    if (!response.ok) {
        throw new Error("Error al traer perfiles")
    }

    const data = await response.json()
    return data.results
}

export async function getProfileByID(id: string) {
    const response = await fetch("https://hp-api.onrender.com/api/characters/"+id)

    if (!response.ok) {
        throw new Error("Error al traer perfil especifico")
    }

    return response.json()
}