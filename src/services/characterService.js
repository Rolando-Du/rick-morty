const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://rickandmortyapi.com/api";

const CHARACTER_URL = `${API_URL}/character`;

export const getCharacters = async ({
  url = CHARACTER_URL,
  name = "",
  status = "",
  gender = "",
  species = "",
} = {}) => {
  let requestUrl = url;

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

    throw new Error(
      "No se pudo obtener la información del personaje"
    );
  }

  return response.json();
};