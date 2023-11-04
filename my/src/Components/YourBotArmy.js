import React from "react";

function YourBotArmy({army,setArmy}) {

  function RemoveBot(bot) {
    const updatedArmy = army.filter((Bot) => Bot.id !== bot.id);
    setArmy(updatedArmy);
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
        </div>
      </div>
      <div className="row">
        {army.length > 0 && army.map((bot) => (
          <div className="ui column" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} onClick={() => RemoveBot(bot)} />
            <p>{bot.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
