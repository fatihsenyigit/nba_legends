import { useState } from "react";
import "./_playerCard.scss";
import ball from '../images/basketball-solid.svg'

const PlayerCard = ({ name, img, statistics }) => {
  const [showPic, setShowPic] = useState(true)

  return (
    <div onClick={() => setShowPic(!showPic)} className="player-container">
      {showPic ? (
        <div>
          <img src={img} alt="" />
          <h3>{name}</h3>
        </div>
      ) : (
        <div className="playerDetails">
          {statistics.map((info,i) => {
            return (
              <div key={i} className="ball-point">
                <img src={ball} alt="" />
                <h4>{info}</h4>
              </div>
            );
          })}
          <p>{name}</p>
          
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
