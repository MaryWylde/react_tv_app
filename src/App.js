import React, { useState, useEffect } from "react";
import HomePage from "./layouts/homePage/homePage";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </header>
      </div>

      <HomePage data={data} />
    </>
  );
}

export default App;
