import React, { useState, useEffect } from "react";

export default function Data(props) {
  const [gameData, setGameData] = useState([]);
  var histori = [];
  //Sufetchinamas API iš DB ir priskiriamas gameData
  useEffect(() => {
    fetch("http://localhost:5000/todos/1")
      .then((res) => res.json())
      .then((data) => setGameData(data));
  });
  useEffect(() => {
    fetch("http://localhost:5000/todos", {
      method: "POST",
      body: JSON.stringify({
        description: "",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  },[]);

  return (
    <div>
      <h1>Console:</h1>
      <div>
        {gameData.description !== undefined
          ? // eslint-disable-next-line
            Object.values(gameData.description).map((i) => {
              if (i === "x" || i === "o") {
                histori.push(i);
              }
            })
          : console.log("neveikia")}
      </div>
      <ul>
        {gameData.description !== undefined
          ? histori.map((result) => <li>{result} moved</li>)
          : console.log("neveikia")}
      </ul>
      <div>{console.log(histori)}</div>
    </div>
  );
}
