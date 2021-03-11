import React from "react";
import { Player } from "../data/StaticTeamData";
import styles from "../styles/PlayerCard.module.css";

const PlayerCard = ({ player, staff }: { player: Player; staff: boolean }) => {
    return (
        <div
            className={styles.playerCard}
            style={{
                backgroundImage: `url(${player.image})`,
                backgroundPosition: "center",
                backgroundSize: "auto 100%",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* <img src={player.image} alt={`${player.name} Image`} /> */}
            <span className={styles.playerName}>{player.name}</span>
            <span className={styles.roleName}>{player.role}</span>
        </div>
    );
};

export default PlayerCard;
