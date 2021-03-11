import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TeamCard from "../components/TeamCard";
import NavBar from "../components/NavBar";
import { StaticMatchData } from "../data/StaticTeamData";
import Footer from "../components/Footer";
import Twitter from "../components/Twitter";
import Twitch from "../components/Twitch";

const Home = () => {
    const mainTextRef = React.useRef<any>(null);

    return (
        <>
            <NavBar active="home" />
            <div className="home">
                <div
                    className="homeBackgroundWrapper"
                    // onMouseMove={e => {
                    //     const xAxis = (window.innerWidth / 2 - e.pageX) / 35;
                    //     const yAxis = (window.innerHeight / 2 - e.pageY) / 35;
                    //     if (mainTextRef.current) {
                    //         mainTextRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
                    //     }
                    // }}
                    // onMouseEnter={e => {
                    //     if (mainTextRef.current) {
                    //         mainTextRef.current.style.transition = "none";
                    //     }
                    // }}
                    // onMouseLeave={e => {
                    //     if (mainTextRef.current) {
                    //         mainTextRef.current.style.transition = "all 0.5s ease";
                    //         mainTextRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
                    //     }
                    // }}
                >
                    <span className={styles.homeMainText} ref={mainTextRef}>
                        <span className={styles.homeMainText1}>AKUMA&nbsp;</span>
                        <span className={styles.homeMainText2}>ESPORTS</span>
                        <a href="https://discord.gg/hDhTZ8wu" target="_blank">
                            <button className={styles.button} style={{ marginTop: "15px" }}>
                                JOIN OUR DISCORD
                            </button>
                        </a>
                        {/* <a>
                            <button className={styles.button}>CONTACT</button>
                        </a> */}
                    </span>
                    <div className={styles.scrollDownWrapper}>
                        <a href="#sec2">
                            <img src="/scroll-down.svg" width="75px" className={styles.scrollDown} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="home2 text-center mt-5" id="sec2">
                <div className={`mb-5 ${styles.container}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className={styles.upcomingMatches}>UPCOMING MATCHES</h1>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {StaticMatchData.map(it => (
                                <div className="col-12 mb-5">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-12">
                                            <div className={styles.matchCard1}>
                                                <img src={it.teamOne.logo} className={styles.teamOneLogo} alt="" height="150px" />
                                                <div className={styles.teamOneTextWrapper}>
                                                    <h4>{it.teamOne.teamName.toUpperCase()}</h4>
                                                </div>
                                                <div className={styles.teamOneTwitterWrapper}>
                                                    <a href={it.teamOne.twitter} target="_blank">
                                                        <i className={`fab fa-twitter ${styles.iconHover}`}></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-12 my-lg-0 my-md-4 my-sm-4 my-4">
                                            <h1 className={styles.matchScore}>
                                                {it.teamOneScore}&nbsp;&nbsp;:&nbsp;&nbsp;{it.teamTwoScore}
                                            </h1>
                                            <h5>{it.date}</h5>
                                        </div>
                                        <div className="col-lg-5 col-md-12">
                                            <div className={styles.matchCard2}>
                                                <img src={it.teamTwo.logo} className={styles.teamTwoLogo} alt="" height="150px" />
                                                <div className={styles.teamTwoTextWrapper}>
                                                    <h4>{it.teamTwo.teamName.toUpperCase()}</h4>
                                                </div>
                                                <div className={styles.teamTwoTwitterWrapper}>
                                                    <a href={it.teamTwo.twitter} target="_blank">
                                                        <i className={`fab fa-twitter ${styles.iconHover}`}></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`mb-5`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <h1 className={styles.upcomingMatches}>TWITTER UPDATES</h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Twitter />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <h1 className={styles.upcomingMatches}>STREAMS</h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12" style={{ height: "400px" }}>
                                                <Twitch channel="fishweird" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
