import { Article, testArticles } from "./Article";

export const ArticleListContainer = async () => {
    const articles = await fetchData()

    return <ArticleList articles={articles} />
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const fetchData = async () => {
    await sleep(3000)

    return testArticles
}

const ArticleList = ( {articles} : {articles: Article[]} ) => {
    if (articles.length === 0) return <p>No articles.</p>

    return(
        <ul>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </ul>
    )
}

const ArticleItem = ({article}: { article: Article}) => {
    return(
        <div>
            <p>{article.id}: {article.title}</p>
            <p>{article.body}</p>
        </div>
    )
}