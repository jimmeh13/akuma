import Head from "next/head";
import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = ({ active }: { active: string }) => {
    return (
        <>
            <Head>
                <title>Akuma Esports</title>
            </Head>
            <nav>
                <ul>
                    <li>
                        <a className={styles.hoverable} href="https://shop.spreadshirt.com/akuma-merch-shop/" target="_blank">
                            MERCH
                        </a>
                    </li>
                    <li>
                        <a className={active === "teams" ? styles.active : styles.hoverable} href={active === "teams" ? undefined : "/teams"}>
                            TEAMS
                        </a>
                    </li>
                    <li>
                        <div>
                            <a href={active === "home" ? undefined : "/"}>
                                <img src="/logo.png" width="100px" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <a className={active === "news" ? styles.active : styles.hoverable} href={active === "news" ? undefined : "/news"}>
                            NEWS
                        </a>
                    </li>
                    <li>
                        <a
                            className={active === "partners" ? styles.active : styles.hoverable}
                            href={active === "partners" ? undefined : "/partners"}
                        >
                            PARTNERS
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
