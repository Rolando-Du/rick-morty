function ResultsSummary({ count, currentPage, totalPages }) {
  return (
    <div className="mb-6 flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-400">
        Personajes encontrados:{" "}
        <span className="font-semibold text-white">
          {count}
        </span>
      </p>

      <p className="text-sm text-slate-500">
        Página{" "}
        <span className="font-medium text-slate-300">
          {currentPage}
        </span>{" "}
        de{" "}
        <span className="font-medium text-slate-300">
          {totalPages}
        </span>
      </p>
    </div>
  );
}

export default ResultsSummary;