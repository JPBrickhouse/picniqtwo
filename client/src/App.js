import React, { useEffect } from "react";

import yelpSearch from "./yelpSearch"

function App() {

  useEffect(() => {
    yelpSearch()
  }, [])




  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;
