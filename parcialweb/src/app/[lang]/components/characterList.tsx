import CharacterCard from './characterCard';

type House = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | 'NoHouse';

type Character = {
  id: string;
  name: string;
  house: House;
  image: string;      
};

export default function CharacterList({ characters, lang }: { characters: Character[], lang: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {characters.map((c: Character) => (
        <CharacterCard key={c.name} character={c} lang={lang} />
      ))}
    </div>
  );
}