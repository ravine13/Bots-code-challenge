import React from "react";
// import BotSpecs from "./BotSpec";



const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};


function BotCard({ bots,setBots,bot,army,setArmy}) {
  function AddArmy(bot) {
    if (!army.includes(bot)) {
      // console.log(army)
      setArmy([...army, bot]);
      
    }
  }
  function removeBot(bot){
    setBots(bots.filter(el =>el !== bot))
    fetch('http://localhost:3000/bots/' + bot.id,{
    method : 'DELETE',
    headers : {
      "content-Type": "application/json"
    }
    })
  }
  <button
  className="ui mini red button"
  onClick={() => removeBot(bot)}
>
  Remove
</button>

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => AddArmy(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
            </div>
          </span>
        {/* <BotSpecs bot={bot} /> */}
        </div>
      </div>
    </div>
  );
}

export default BotCard;
