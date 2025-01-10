import { useState } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";

function App() {
  const [DarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !DarkMode);
  };

  return (
    <>
      <div
        className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${
          DarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <HeaderLeft DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
        <Home DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </>
  );
}

export default App;
