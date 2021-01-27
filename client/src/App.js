import React from "react";

// Importing the various pages and components
import ApplicationNavigation from "./components/AppNav/ApplicationNavigation"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

// Importing reacter router dom
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// The application function
function App() {
  return (
    <BrowserRouter>
      <div>
        
        {/* Navigation Bar Component */}
        <ApplicationNavigation />

        {/* React Router Switch that will take users between the three pages */}
        <Switch>
          
          {/* Contact Page */}
          <Route path="/contact">
            <Contact />
          </Route>
          
          {/* About Page */}
          <Route path="/about">
            <About />
          </Route>
          
          {/* Home Page */}
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
