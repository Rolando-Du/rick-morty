import { Link } from "react-router";

function CharacterCard({ character }) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  return (
    <Link
      to={`/characters/${character.id}`}
      className="group block"
    >
      <article className="h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-green-500/50 group-hover:shadow-xl">
        <div className="overflow-hidden">
          <img
            src={character.image}
            alt={`Imagen de ${character.name}`}
            className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-white transition group-hover:text-green-400">
            {character.name}
          </h2>

          <div className="mt-3 flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                statusColor[character.status] || "bg-slate-500"
              }`}
            />

            <span className="text-sm text-slate-300">
              {character.status}
            </span>
          </div>

          <div className="mt-5 space-y-3 text-sm">
            <div>
              <span className="text-slate-500">
                ID:
              </span>{" "}
              <span className="text-slate-300">
                {character.id}
              </span>
            </div>

            <div>
              <span className="text-slate-500">
                Especie:
              </span>{" "}
              <span className="text-slate-300">
                {character.species}
              </span>
            </div>

            <div>
              <span className="text-slate-500">
                Origen:
              </span>{" "}
              <span className="text-slate-300">
                {character.origin.name}
              </span>
            </div>

            <div>
              <span className="text-slate-500">
                Estado:
              </span>{" "}
              <span className="text-slate-300">
                {character.status}
              </span>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-800 pt-4">
            <span className="text-sm font-medium text-green-400">
              Ver detalle →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CharacterCard;