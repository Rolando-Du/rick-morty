import CharacterGrid from "../components/CharacterGrid";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ResultsSummary from "../components/ResultsSummary";
import { useCharacters } from "../hooks/useCharacters";

function Home() {
  const {
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
  } = useCharacters();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Header />

      <SearchBar
        value={search}
        onChange={setSearch}
        onSubmit={handleSearch}
      />

      <Filters
        status={status}
        gender={gender}
        species={species}
        onStatusChange={handleStatusChange}
        onGenderChange={handleGenderChange}
        onSpeciesChange={handleSpeciesChange}
        onClear={handleClearFilters}
      />

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <>
          <ResultsSummary
            count={info.count}
            currentPage={currentPage}
            totalPages={info.pages}
          />

          <CharacterGrid characters={characters} />

          <Pagination
            prev={info.prev}
            next={info.next}
            currentPage={currentPage}
            totalPages={info.pages}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </>
      )}
    </div>
  );
}

export default Home;