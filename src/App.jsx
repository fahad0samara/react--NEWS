
import { useContext } from "react";
import { themeContext } from "./Context";
import Footor from "./Footor";
import './index.css'

import HomeNavserch from "./page/Home/HomeNavserch";
import HomForNews from "./page/Home/HomForNews";
import Navbar from "./page/Navbar";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="bg-[#E7D1AA] "
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <HomeNavserch />
      <HomForNews />
      <Footor />
    </div>
  );
}

export default App
