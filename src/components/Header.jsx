function Header() {
  return (
    <header className="mb-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Rick and Morty API
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Rick & Morty
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Explorá los personajes del universo de Rick and Morty,
            conocé su origen, especie y estado.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
