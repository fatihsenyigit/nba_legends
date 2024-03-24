
import "./_playerCard.scss";

const PlayerCard = ({name,img}) => {
    return (
        <div className="player-container">
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

export default PlayerCard