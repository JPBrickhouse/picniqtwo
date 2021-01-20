import React from "react";

// Importing the various components
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"



function App() {





  return (
    <div>
      {/* Navigation Bar */}
      <Nav/>

      {/* START of Router Switch to switch between home, about, contact */}
      {/* Home */}
      <Home/>

      {/* About */}
      <About/>

      {/* Contact */}
      <Contact/>
      {/* END of Router Switch to switch between home, about, contact */}

      {/* Placeholder text */}
      <p>App</p>

    </div>
  );
}

export default App;
