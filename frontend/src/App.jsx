import {Route, Routes} from "react-router-dom";

import Main from "./pages/Main.jsx";
import Jumpscare from "./pages/Jumpscare.jsx";
import ProjectKali from "./pages/ProjectKali.jsx";
import NotFound from "./pages/NotFound.jsx";

import './App.css'

export default function App() {
  return (
    <div className={"flex flex-col min-h-screen bg-black text-white fonts"}>
      <Routes>
        <Route path="" element={<Main />} />

        <Route path="/kali" element={<ProjectKali />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Jumpscare />} />
      </Routes>
    </div>
  )
}

