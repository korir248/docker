import React,{useEffect,useState} from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    const data = await fetch("http://localhost:8000/")
    const response = await data.json()
    console.log(response)
    setPlayers(response)
  }

console.log(players)
  return (
    <div className="main">
      <div className="row">
        {
          players.map(player => (
            <div className="card">
            <img src={player.image} className="card-img-top image" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{player.name}</h5>
              <p className="card-text">
                {player.description}
                
              </p>
            </div>
          </div>
          ))
        }
      
      </div>
    </div>
  );
}

export default App;
