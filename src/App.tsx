import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllHeroesPage from "./pages/AllHeroesPage";
import FavouriteHeroesPage from "./pages/FavouriteHeroesPage";

function App() {

  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllHeroesPage />}></Route>
        <Route path="/favourites" element={<FavouriteHeroesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
