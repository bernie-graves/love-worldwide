import React from "react";
import "../Styles/article.css";

const ArticleContent = ({ content }) => {
  const renderContent = (item) => {
    switch (item.type) {
      case "heading":
        const HeadingTag = `h${item.level}`;
        return (
          <HeadingTag className={`h${item.level}`}>
            {item.children[0].text}
          </HeadingTag>
        );

      case "paragraph":
        if (!item.children[0].text.trim()) {
          return null; // Do not render anything for empty text
        }
        return <p className="mb-3 article-text">{item.children[0].text}</p>;

      case "image":
        return (
          <div className="d-flex justify-content-center mb-3">
            <img
              src={`${item.image.url}`}
              alt={item.image.alternativeText}
              className="img-fluid" // Bootstrap class for responsive images
              style={{ width: "80%" }}
            />
          </div>
        );

      case "list":
        return (
          <ul className="list-unstyled mb-3">
            {item.children.map((listItem, index) => {
              // Concatenate all texts in the listItem's children with bold styling
              const concatenatedText = listItem.children.map((child) => {
                return child.bold ? (
                  <strong key={child.text}>{child.text}</strong>
                ) : (
                  <span key={child.text}>{child.text}</span>
                );
              });

              return <li key={index}>{concatenatedText}</li>;
            })}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {content.map((item, index) => (
        <div key={index} className="mb-3">
          {renderContent(item)}
        </div>
      ))}
    </div>
  );
};

export default ArticleContent;
