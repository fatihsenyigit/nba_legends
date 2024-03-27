import { useState } from "react";
import "./_playerCard.scss";

const PlayerCard = ({ name, img, statistics }) => {
  const [showPic, setShowPic] = useState(false)
 

  return (
    <div onClick={() => setShowPic(!showPic)} className="player-container">
      {showPic ? (
        <div>
          <img src={img} alt="" />
          <h3>{name}</h3>
        </div>
      ) : (
        <div className="playerDetails">
          {statistics.map((info) => {
            return <h4>{info}</h4>;
          })}
          <h3>{name}</h3>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
