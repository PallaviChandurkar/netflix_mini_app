import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detailes from "./pages/Detailes";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviedetailes/:slug" element={<Detailes />} />
      </Routes>
    </>
  )
}

export default App;