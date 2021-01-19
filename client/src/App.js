import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    // Using fetch to call the Zomato
    fetch("/api/externalRoutes/zomatoSearch")
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;
