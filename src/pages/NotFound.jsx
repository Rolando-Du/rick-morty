import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white sm:text-6xl">
          Página no encontrada
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-400">
          La página que estás buscando no existe o fue movida a otra ubicación.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-green-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-green-400"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;