import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/characters/:id"
          element={<CharacterDetail />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </main>
  );
}

export default App;