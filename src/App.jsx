import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Favorites from "./pages/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {
  return (
    <FavoriteProvider>
      <NavBar />
      <main className='main_content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </FavoriteProvider>
  );
}

export default App;
