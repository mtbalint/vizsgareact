import React from "react";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const url = "api/hotels";
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  // get data
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setResponse(false);
    }
  };
  // load all stuff
  useEffect(() => {
    getData();
  }, []);
  //
  return (
    <div>
      <h1>Hotels</h1>
      {response === false ? (
        <p>Oops, something happened</p>
      ) : (
        <div>
          {data ? (
            <div>
              {data.map((item, index) => (
                <div>
                  <Hotel key={index} item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <LoadingMask />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
