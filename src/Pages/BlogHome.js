import React, { useState, useEffect } from "react";
import ArticlePreview from "../Components/ArticlePreview";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_STRAPI_API_URL}/api/articles?populate=*`) // Replace with your Strapi URL
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the articles", error);
      });
  }, []);

  return (
    <Container style={{ minHeight: "100vh" }}>
      <h1>Articles</h1>
      <Row>
        {articles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
