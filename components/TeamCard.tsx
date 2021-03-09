import React from "react";
import styles from "../styles/TeamCard.module.css";

type Props = {
    src: string;
    teamName: string;
    teamGame: string;
};

const TeamCard = ({ src, teamName, teamGame }: Props) => {
    return (
        <a href={`/teams/${teamName.toLowerCase()}`}>
            <div className={styles.teamCard}>
                <img src={src} alt="Logo" />
                <p className={styles.teamName}>{teamName}</p>
                <p className={styles.teamGame}>{teamGame}</p>
            </div>
        </a>
    );
};

export default TeamCard;
