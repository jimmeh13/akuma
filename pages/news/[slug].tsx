import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { StaticNewsArticles } from "../../data/StaticTeamData";

const Article = () => {
    const router = useRouter();
    const slug = router.query.slug;
    const article = StaticNewsArticles.find(it => it.slug === slug);
    if (!article) {
        return <div></div>;
    }
    return (
        <>
            <div className="wrapper">
                <NavBar active="" />
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h1>{article.title}</h1>
                            <h2>{article.date}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>{article.body}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Article;
