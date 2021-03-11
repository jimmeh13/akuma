import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import NewsArticleCard from "../../components/NewsArticleCard";
import { StaticNewsArticles } from "../../data/StaticTeamData";
import styles from "../../styles/News.module.css";

const News = () => (
    <>
        <div className="wrapper">
            <NavBar active="news" />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className={styles.header}>NEWS</h1>
                    </div>
                </div>
                <div className="row">
                    {StaticNewsArticles.map(it => (
                        <div className="col-lg-4 col-md-6 col-12 mb-4 mx-auto">
                            <NewsArticleCard article={it} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default News;
