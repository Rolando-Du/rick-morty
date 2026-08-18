import CharacterCard from "./CharacterCard";

function CharacterGrid({ characters }) {
  if (!characters.length) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        <p className="text-slate-400">
          No hay personajes para mostrar.
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </section>
  );
}

export default CharacterGrid;
