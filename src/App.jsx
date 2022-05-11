
import { useContext } from "react";
import { themeContext } from "./Context";
import './index.css'

import HomeNavserch from "./page/HomeNavserch";
import HomForNews from "./page/HomForNews";
import Navbar from "./page/Navbar";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <HomeNavserch />
      <HomForNews/>
  
  
      
    </div>
  );
}

export default App
