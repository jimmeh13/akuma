import React from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import StaticTeamData from "../../data/StaticTeamData";
import NavBar from "../../components/NavBar";
import PlayerCard from "../../components/PlayerCard";

const Team = () => {
    const router = useRouter();
    const teamName = router.query.teamName;
    const team = StaticTeamData.find(it => it.teamName === teamName);
    if (!team) {
        return <div>Cannot find team :sadge:</div>;
    }
    return (
        <>
            <NavBar active="" />
            <div>{team.teamName.toUpperCase()}</div>
            <div className="container">
                <div className="row">
                    {team.players.map(it => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <PlayerCard player={it} staff={false} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Team;
