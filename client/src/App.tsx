import "./App.css";
import { Routes, Route } from "react-router-dom";
import BirdCard from "./components/BirdCard";
import BirdForm from "./components/BirdForm";
import Dock from "./components/Dock";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BirdCard />} />
        <Route path="newBird" element={<BirdForm />} />
      </Routes>

      <Dock />
    </>
  );
}
