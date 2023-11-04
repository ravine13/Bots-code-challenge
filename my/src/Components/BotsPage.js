import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  //start here with your code for step one
  const [army, setArmy] =useState([]);

  return (
    <div>
      <YourBotArmy army={army} setArmy={setArmy}/>
      <BotCollection army={army} setArmy={setArmy}/>
    </div>
  )
}

export default BotsPage;