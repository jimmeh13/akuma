import { Partner } from "../data/StaticTeamData";
import styles from "../styles/NewsArticleCard.module.css";

const PartnerCard = ({ partner }: { partner: Partner }) => (
    <>
        <a href={partner.link} target="_blank">
            <div
                className={styles.card}
                style={{
                    backgroundImage: `url(${partner.logo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    backgroundPosition: "center"
                }}
            >
                <h2 className="mt-5">{partner.title}</h2>
                <h4 className="mt-4">{partner.plug}</h4>
            </div>
        </a>
    </>
);

export default PartnerCard;
