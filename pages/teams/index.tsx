import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TeamCard from "../../components/TeamCard";
import StaticTeamData from "../../data/StaticTeamData";
import styles from "../../styles/Teams.module.css";

const Teams = () => {
    return (
        <>
            <div className="wrapper">
                <div className={styles.background}>
                    <NavBar active="teams" />
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col">
                                <h1 className={styles.header}>TEAMS</h1>
                            </div>
                        </div>
                        <div className="row">
                            {StaticTeamData.map(it => (
                                <div className="col-lg-4 col-sm-6 col-xs-12 mx-auto mb-3">
                                    <TeamCard src={it.logo} teamName={it.teamName.toUpperCase()} teamGame={it.gameName.toUpperCase()} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Teams;
