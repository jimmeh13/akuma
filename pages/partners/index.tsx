import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Teams.module.css";
import { StaticPartners } from "../../data/StaticTeamData";
import PartnerCard from "../../components/PartnerCard";

const Partners = () => (
    <>
        <div className="wrapper">
            <div>
                <NavBar active="partners" />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <h1 className={styles.header}>PARTNERS</h1>
                        </div>
                    </div>
                    <div className="row mb-5">
                        {StaticPartners.map(it => (
                            <div className="col-lg-4 col-md-6 col-12 mx-auto mb-4">
                                <PartnerCard partner={it} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default Partners;
