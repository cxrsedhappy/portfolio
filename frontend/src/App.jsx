import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Main from "./pages/Main.jsx";
import Jumpscare from "./pages/Jumpscare.jsx";
import ProjectKali from "./pages/ProjectKali.jsx";
import NotFound from "./pages/NotFound.jsx";
import './App.css'
import Contact from "./pages/Contacts.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col max-height bg-black text-white fonts">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              className={"flex flex-row"}
              initial={{ opacity: 0, filter: "brightness(1)" }}
              animate={{ opacity: 1, filter: "brightness(1)" }}
              exit={{ opacity: 0, filter: "brightness(0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Main />
            </motion.div>
          }/>

          <Route path="/contact" element={
            <div className="flex flex-1 items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Contact />
              </motion.div>
            </div>
          }/>

          <Route path="/kali" element={
            <motion.div
              initial={{ opacity: 0, filter: "brightness(0.5)" }}
              animate={{ opacity: 1, filter: "brightness(1)" }}
              exit={{ opacity: 0, filter: "brightness(0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <ProjectKali />
            </motion.div>
          }/>

          <Route path="/admin" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Jumpscare />
            </motion.div>
          }/>

          <Route path="*" element={
            <div className="flex flex-1 items-center justify-center">
              <motion.div
                  className={'mt-12'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <NotFound />
              </motion.div>
            </div>
          }/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}