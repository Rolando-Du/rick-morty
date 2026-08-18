function Filters({
  status,
  gender,
  species,
  onStatusChange,
  onGenderChange,
  onSpeciesChange,
  onClear,
}) {
  return (
    <div className="mb-8">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label
            htmlFor="status-filter"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Estado
          </label>

          <select
            id="status-filter"
            value={status}
            onChange={(event) => onStatusChange(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          >
            <option value="">Todos</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="gender-filter"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Género
          </label>

          <select
            id="gender-filter"
            value={gender}
            onChange={(event) => onGenderChange(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          >
            <option value="">Todos</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="species-filter"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Especie
          </label>

          <input
            id="species-filter"
            type="text"
            value={species}
            onChange={(event) => onSpeciesChange(event.target.value)}
            placeholder="Ej: Human, Alien..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={onClear}
          className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-green-500 hover:text-white"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}

export default Filters;