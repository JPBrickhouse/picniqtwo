import React from "react";

// Importing the various components
import ApplicationNavigation from "./ApplicationNavigation"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

// Importing reacter router dom
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// The application function
function App() {
  return (
    <BrowserRouter>
      <div>
        
        <ApplicationNavigation />

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

// Exporting the application function
export default App;
