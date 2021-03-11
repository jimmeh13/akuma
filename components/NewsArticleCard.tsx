import { NewsArticle } from "../data/StaticTeamData";
import styles from "../styles/NewsArticleCard.module.css";

const NewsArticleCard = ({ article }: { article: NewsArticle }) => (
    <>
        <a href={`/news/${article.slug}`}>
            <div
                className={styles.card}
                style={{
                    backgroundImage: `url(${article.bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto 100%",
                    backgroundPosition: "center"
                }}
            >
                <h2 className="mt-2">{article.title}</h2>
                <h4>{article.description}</h4>
            </div>
        </a>
    </>
);

export default NewsArticleCard;
