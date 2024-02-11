import ArticleList from "../components/ArticleList"
import articles from "./article-content"

const ArticlesListPage = () =>{
    return (
        <>
        <h1>{articles.name}</h1>
        <ArticleList articles={articles}/>
        </>
        
    )
}

export default ArticlesListPage