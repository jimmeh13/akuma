import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TeamCard from "../components/TeamCard";
import NavBar from "../components/NavBar";

const Home = () => {
    const mainTextRef = React.useRef<any>(null);

    return (
        <>
            <NavBar active="home" />
            <div className="home">
                <div
                    className="homeBackgroundWrapper"
                    onMouseMove={e => {
                        const xAxis = (window.innerWidth / 2 - e.pageX) / 35;
                        const yAxis = (window.innerHeight / 2 - e.pageY) / 35;
                        if (mainTextRef.current) {
                            mainTextRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
                        }
                    }}
                    onMouseEnter={e => {
                        if (mainTextRef.current) {
                            mainTextRef.current.style.transition = "none";
                        }
                    }}
                    onMouseLeave={e => {
                        if (mainTextRef.current) {
                            mainTextRef.current.style.transition = "all 0.5s ease";
                            mainTextRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
                        }
                    }}
                >
                    <span className={styles.homeMainText} ref={mainTextRef}>
                        <span className={styles.homeMainText1}>AKUMA&nbsp;</span>
                        <span className={styles.homeMainText2}>ESPORTS</span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Home;
