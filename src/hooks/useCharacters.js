import { useEffect, useState } from "react";
import { getCharacters } from "../services/characterService";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCharacters = async ({
    url,
    name,
    statusFilter,
    genderFilter,
    speciesFilter,
    page = 1,
  } = {}) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getCharacters({
        url,
        name,
        status: statusFilter,
        gender: genderFilter,
        species: speciesFilter,
      });

      setCharacters(data.results);
      setInfo(data.info);
      setCurrentPage(page);
    } catch (err) {
      setCharacters([]);
      setInfo({});
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    loadCharacters({
      name: search.trim(),
      statusFilter: status,
      genderFilter: gender,
      speciesFilter: species.trim(),
      page: 1,
    });
  };

  const handleStatusChange = (value) => {
    setStatus(value);

    loadCharacters({
      name: search.trim(),
      statusFilter: value,
      genderFilter: gender,
      speciesFilter: species.trim(),
      page: 1,
    });
  };

  const handleGenderChange = (value) => {
    setGender(value);

    loadCharacters({
      name: search.trim(),
      statusFilter: status,
      genderFilter: value,
      speciesFilter: species.trim(),
      page: 1,
    });
  };

  const handleSpeciesChange = (value) => {
    setSpecies(value);
  };

  const handleClearFilters = () => {
    setSearch("");
    setStatus("");
    setGender("");
    setSpecies("");

    loadCharacters({
      page: 1,
    });
  };

  const onPrevious = () => {
    if (info.prev) {
      loadCharacters({
        url: info.prev,
        page: currentPage - 1,
      });
    }
  };

  const onNext = () => {
    if (info.next) {
      loadCharacters({
        url: info.next,
        page: currentPage + 1,
      });
    }
  };

  useEffect(() => {
    let ignore = false;

    const loadInitialCharacters = async () => {
      try {
        const data = await getCharacters();

        if (!ignore) {
          setCharacters(data.results);
          setInfo(data.info);
        }
      } catch (err) {
        if (!ignore) {
          setCharacters([]);
          setInfo({});
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadInitialCharacters();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    characters,
    info,
    search,
    status,
    gender,
    species,
    currentPage,
    loading,
    error,
    setSearch,
    handleSearch,
    handleStatusChange,
    handleGenderChange,
    handleSpeciesChange,
    handleClearFilters,
    onPrevious,
    onNext,
  };
};