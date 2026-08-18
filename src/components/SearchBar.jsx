function SearchBar({ value, onChange, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex flex-col gap-3 sm:flex-row"
    >
      <div className="flex-1">
        <label
          htmlFor="character-search"
          className="sr-only"
        >
          Buscar personaje
        </label>

        <input
          id="character-search"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar personaje..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
        />
      </div>

      <button
        type="submit"
        className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;