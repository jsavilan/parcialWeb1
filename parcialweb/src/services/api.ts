export async function getProfiles(limit=12) {
    const response = await fetch("https://hp-api.onrender.com/api/characters")

    if (!response.ok) {
        throw new Error("Error al traer perfiles")
    }

    const data = await response.json()
    return data.slice(0,limit); //Lo limita hasta el valor colocado en limit default 12
}

export async function getProfileByID(id: string) {
    const response = await fetch("https://hp-api.onrender.com/api/character/"+id)

    if (!response.ok) {
        throw new Error("Error al traer perfil especifico")
    }

    const data = await response.json();

    return data[0]
}