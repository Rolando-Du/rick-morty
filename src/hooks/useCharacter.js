import { useEffect, useState } from "react";
import { getCharacterById } from "../services/characterService";

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getCharacterById(id);

        setCharacter(data);
      } catch (err) {
        setCharacter(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadCharacter();
    }
  }, [id]);

  return {
    character,
    loading,
    error,
  };
};