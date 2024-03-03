import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "../Components/ArticleContent";
import "../Styles/article.css";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_STRAPI_API_URL}/api/articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Article not found");
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="article-container">
      {article && (
        <div>
          <h2>{article.attributes.ArticleName}</h2>
          <ArticleContent content={article.attributes.articleBody} />
        </div>
      )}
    </div>
  );
};

export default Article;
