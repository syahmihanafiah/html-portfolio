import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "./components/Navbar"
import { s } from "framer-motion/client"

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000, once:false,offset:100 });
    document.documentElement.classList.add('dark'); 

  },[]);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };  
  return (
    <div className = { 
      darkMode 
      ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen' 
      : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />  
    </div>  
  )
}

export default App

