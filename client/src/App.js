import { Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/loading";
import Home from "./pages/home/home";
import Detailships from "./pages/detailships/detailships";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loading/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/ships/:id" element={<Detailships/>} />
    </Routes>
  );
}

export default App;
