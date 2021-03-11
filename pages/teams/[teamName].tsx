import React from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import StaticTeamData from "../../data/StaticTeamData";
import NavBar from "../../components/NavBar";
import PlayerCard from "../../components/PlayerCard";
import styles from "../../styles/teamName.module.css";
import Footer from "../../components/Footer";

const Team = () => {
    const router = useRouter();
    const teamName = router.query.teamName;
    const team = StaticTeamData.find(it => it.teamName === teamName);
    if (!team) {
        return <div></div>;
    }
    return (
        <>
            <div className="wrapper">
                <NavBar active="" />
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <img src={team.logo} alt={`${team.teamName} Logo`} width="250px" className={styles.logo} />
                            <h1 className={styles.header}>{team.teamName.toUpperCase()}</h1>
                            <p className={styles.description}>{team.description}</p>
                        </div>
                    </div>
                    {team.players.length > 0 && (
                        <>
                            <div className="row mb-5">
                                <div className="col-lg-3 col-md-12">
                                    <h1 className={`align-middle text-center ${styles.roster}`}>ROSTER</h1>
                                </div>
                                <div className="col-lg-9 col-sm-12">
                                    <div className="row">
                                        {team.players.map(it => (
                                            <div className="col-xl-4 col-lg-6 col-md-12 mx-auto mb-3">
                                                <PlayerCard player={it} staff={false} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {team.staff.length > 0 && (
                        <>
                            <hr />
                            <div className="row mt-5">
                                <div className="col-lg-3 col-md-12">
                                    <h1 className={`align-middle text-center ${styles.roster}`}>STAFF</h1>
                                </div>
                                <div className="col-lg-9 col-sm-12 mb-5">
                                    <div className="row">
                                        {team.staff.map(it => (
                                            <div className="col-xl-4 col-lg-6 col-md-12 mx-auto mb-3">
                                                <PlayerCard player={it} staff={true} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Team;
