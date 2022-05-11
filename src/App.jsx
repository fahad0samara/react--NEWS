
import { useContext } from "react";
import { themeContext } from "./Context";
import './index.css'
import { Home } from "./page/Home";
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
      <Home/>
      
    </div>
  );
}

export default App
