import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({army,setArmy}) {
  const [bots, setBots] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
      });
  }, []);

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => {
          return <BotCard bots={bots} setBots={setBots} bot={bot} army={army} setArmy={setArmy}/>
        })}
      </div>
    </div>
  );
}

export default BotCollection;
