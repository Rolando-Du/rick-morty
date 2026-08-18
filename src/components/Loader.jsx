function Loader() {
  const skeletons = Array.from({ length: 8 });

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
        >
          <div className="h-64 w-full bg-slate-800" />

          <div className="space-y-4 p-5">
            <div className="h-6 w-3/4 rounded bg-slate-800" />

            <div className="h-4 w-1/2 rounded bg-slate-800" />

            <div className="space-y-3 pt-2">
              <div className="h-4 w-2/3 rounded bg-slate-800" />
              <div className="h-4 w-3/4 rounded bg-slate-800" />
              <div className="h-4 w-1/2 rounded bg-slate-800" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Loader;