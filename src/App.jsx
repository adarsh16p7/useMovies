import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
