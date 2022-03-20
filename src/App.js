import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { useState } from "react";
// importing router
import React from 'react';
import { BrowserRouter as Router, 
         Routes, 
         Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); // tells wheter dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  let toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#5e5c5c";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      {/* adding prop as title */}
      <Router>
        <Navbar
          title="TextDesk"
          aboutText="About"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={Mode}/>}></Route>
          <Route exact path="/" element={<TextForm showalert={showAlert} heading="Add your text below in the text area" mode={Mode}/>}> </Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
