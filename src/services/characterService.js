const API_URL = "/api/rickmorty";
const CHARACTER_URL = `${API_URL}/character`;

const EXTERNAL_API_URL = "https://rickandmortyapi.com/api";

const normalizeApiUrl = (url) => {
  if (!url) {
    return CHARACTER_URL;
  }

  return url.replace(EXTERNAL_API_URL, API_URL);
};

export const getCharacters = async ({
  url = CHARACTER_URL,
  name = "",
  status = "",
  gender = "",
  species = "",
} = {}) => {
  let requestUrl = normalizeApiUrl(url);

  if (name || status || gender || species) {
    const params = new URLSearchParams();

    if (name) {
      params.append("name", name);
    }

    if (status) {
      params.append("status", status);
    }

    if (gender) {
      params.append("gender", gender);
    }

    if (species) {
      params.append("species", species);
    }

    requestUrl = `${CHARACTER_URL}?${params.toString()}`;
  }

  const response = await fetch(requestUrl);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(
        "No se encontraron personajes con los filtros seleccionados"
      );
    }

    if (response.status === 429) {
      throw new Error(
        "La API está recibiendo demasiadas solicitudes. Intentá nuevamente en unos segundos."
      );
    }

    throw new Error("No se pudieron obtener los personajes");
  }

  return response.json();
};

export const getCharacterById = async (id) => {
  const response = await fetch(`${CHARACTER_URL}/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("No se encontró el personaje");
    }

    if (response.status === 429) {
      throw new Error(
        "La API está recibiendo demasiadas solicitudes. Intentá nuevamente en unos segundos."
      );
    }

    throw new Error(
      "No se pudo obtener la información del personaje"
    );
  }

  return response.json();
};