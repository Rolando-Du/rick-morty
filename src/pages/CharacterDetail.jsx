import { Link, useParams } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import { useCharacter } from "../hooks/useCharacter";

function CharacterDetail() {
  const { id } = useParams();

  const {
    character,
    loading,
    error,
  } = useCharacter(id);

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="animate-pulse overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="grid md:grid-cols-2">
            <div className="h-96 bg-slate-800" />

            <div className="space-y-5 p-8">
              <div className="h-8 w-3/4 rounded bg-slate-800" />
              <div className="h-5 w-1/2 rounded bg-slate-800" />
              <div className="h-5 w-2/3 rounded bg-slate-800" />
              <div className="h-5 w-1/2 rounded bg-slate-800" />
              <div className="h-5 w-3/4 rounded bg-slate-800" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link
          to="/"
          className="mb-6 inline-block rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-green-500 hover:text-white"
        >
          ← Volver a personajes
        </Link>

        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!character) {
    return null;
  }

  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link
        to="/"
        className="mb-6 inline-block rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-green-500 hover:text-white"
      >
        ← Volver a personajes
      </Link>

      <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
        <div className="grid md:grid-cols-2">
          <img
            src={character.image}
            alt={`Imagen de ${character.name}`}
            className="h-full min-h-96 w-full object-cover"
          />

          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Personaje #{character.id}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-white">
              {character.name}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${
                  statusColor[character.status] || "bg-slate-500"
                }`}
              />

              <span className="text-slate-300">
                {character.status}
              </span>
            </div>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-sm text-slate-500">
                  Especie
                </dt>

                <dd className="mt-1 text-lg text-white">
                  {character.species}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">
                  Género
                </dt>

                <dd className="mt-1 text-lg text-white">
                  {character.gender}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">
                  Tipo
                </dt>

                <dd className="mt-1 text-lg text-white">
                  {character.type || "No especificado"}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">
                  Origen
                </dt>

                <dd className="mt-1 text-lg text-white">
                  {character.origin.name}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">
                  Última ubicación
                </dt>

                <dd className="mt-1 text-lg text-white">
                  {character.location.name}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-500">
                  Episodios
                </dt>

                <dd className="mt-1 text-lg text-white">
                  {character.episode.length}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CharacterDetail;