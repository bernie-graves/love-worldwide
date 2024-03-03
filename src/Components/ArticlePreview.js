import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";
import "../Styles/article-preview.css";

const ArticlePreview = ({ article }) => {
  const { ArticleName, ArticleSummary, updatedAt, PreviewPicture } =
    article.attributes;

  const navigate = useNavigate();

  const openArticle = () => {
    navigate(`/articles/${article.id}`);
  };
  // Format the date
  const formattedDate = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Extract image data
  const imageUrl = PreviewPicture.data
    ? PreviewPicture.data.attributes.url
    : "";
  const imageAlt = PreviewPicture.data
    ? PreviewPicture.data.attributes.alternativeText
    : "Article Image";

  return (
    <Col md={4} onClick={openArticle} style={{ cursor: "pointer" }}>
      <Card className="mb-4" style={{ height: "100%" }}>
        {imageUrl && (
          <Card.Img
            variant="top"
            className="preview-card-img-top"
            src={`${process.env.REACT_APP_STRAPI_API_URL}${imageUrl}`}
            alt={imageAlt}
          />
        )}
        <Card.Body className="article-card-body">
          <Card.Title>{ArticleName}</Card.Title>
          <Card.Text className="article-card-text">{ArticleSummary}</Card.Text>
          <Card.Text>
            <small className="text-muted">{formattedDate}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticlePreview;
