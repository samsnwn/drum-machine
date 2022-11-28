import './App.css'
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import NavBar from "./components/Navbar/NavBar";
import PadPlayer from "./components/PadPlayer/PadPlayer";
import Sequencer from "./components/Sequencer/Sequencer";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pads" element={<PadPlayer />} />
          <Route path="/sequencer" element={<Sequencer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
