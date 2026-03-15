import Image from "next/image"
import Link from "next/link"

type House = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'NoHouse';

type Character = {
  id: string;
  name: string;
  house: House;
  image: string;      
};

//Colores del Background para Tailwind
const BgColorHouses = {
    Gryffindor: 'bg-[#740001]',
    Slytherin: 'bg-[#1A472A]',
    Ravenclaw: 'bg-[#0E1A40]',
    Hufflepuff: 'bg-[#FFD800]',
    NoHouse: 'bg-[#D1D5DB]',
}

export default function CharacterCard({ character, lang }: { character: Character, lang: string }) {
    const house = (character.house as House)|| 'NoHouse';
    const bg = BgColorHouses[house];
    const id = character.id;

    return (
        <Link href={`/${lang}/profiles/${id}`} className="block rounded-lg overflow-hidden shadow-md">
            <div className={`p-3 text-center text-white font-bold ${bg}`}>{character.name}</div>
            <div className="bg-white h-[420px] overflow-hidden relative">
                <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    objectFit="cover"
                >
                </Image>
            </div>
        </Link>
    );
}