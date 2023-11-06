import React from "react";
import 'semantic-ui-css/semantic.min.css';

function YourBotArmy({ army, setArmy }) {
  function RemoveBot(bot) {
    const updatedArmy = army.filter((Bot) => Bot.id !== bot.id);
    setArmy(updatedArmy);
  }

  return (
    <div className="ui segment inverted olive">
      <div className="ui five column grid">
        <div className="row bot-army-row">Your Bot Army</div>
      </div>
      <div className="row">
        <div className="ui five column grid"> 
          {army.length > 0 &&
            army.map((bot) => (
              <div className="ui column" key={bot.id}>
                <div className="bot-card">
                  <img src={bot.avatar_url} alt={bot.name} onClick={() => RemoveBot(bot)} />
                  <p>{bot.name}</p>
                  <p>
                    <i className="heartbeat icon" /> {bot.health}
                  </p>
                  <p>
                    <i className="shield icon" /> {bot.armor}
                  </p>
                  <p>
                    <i className="lightning icon" /> {bot.damage}
                  </p>
                  <p>
                    <i className="star icon" /> {bot.bot_class}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
