function Pagination({
  prev,
  next,
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) {
  return (
    <nav
      className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      aria-label="Paginación de personajes"
    >
      <button
        type="button"
        onClick={onPrevious}
        disabled={!prev}
        className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 font-medium text-white transition hover:border-green-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Anterior
      </button>

      <div className="rounded-lg border border-slate-800 bg-slate-900 px-5 py-2.5 text-sm text-slate-300">
        Página{" "}
        <span className="font-semibold text-white">
          {currentPage}
        </span>{" "}
        de{" "}
        <span className="font-semibold text-white">
          {totalPages}
        </span>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!next}
        className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 font-medium text-white transition hover:border-green-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Siguiente →
      </button>
    </nav>
  );
}

export default Pagination;