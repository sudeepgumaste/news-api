import React, { useState } from "react";
import clsx from "clsx";
import dayjs from "dayjs";

import { TNewsArticle } from "../../../types/api-response";

import PlaceholderImage from "../../../assets/images/placeholder.jpeg";

import styles from "./styles.module.css";

const NewsArticleCard: React.FC<TNewsArticle> = ({
  title,
  description,
  url,
  publishedAt,
  urlToImage,
  author,
}) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [_urlToImage, set_urlToImage] = useState(urlToImage)

  const maxDescriptionLength = 80;

  const handleBookmark = () => {
    console.log("bookmark");
  };

  const handleImageMissing = () => {
    set_urlToImage(PlaceholderImage)
  }

  if(title === "[Removed]"){
    return null
  }

  return (
    <article className={styles.article}>
      {/* <button onClick={handleBookmark}>
        
      </button> */}
      <a href={url} onPointerLeave={() => setDescriptionExpanded(false)}>
        <img
          src={_urlToImage}
          onError={handleImageMissing}
          alt={title}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.textSection}>
          <p className={styles.title} title={title}>
            {title}
          </p>
          {description && (
            <p title={description} className={styles.description}>
              <span
                className={clsx({ [styles.truncated]: !descriptionExpanded })}
              >
                {description}
              </span>
              {description?.length > maxDescriptionLength && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDescriptionExpanded(!descriptionExpanded);
                    e.preventDefault();
                  }}
                  className={styles.readMore}
                >
                  {descriptionExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
          )}
        </div>
        <div className={styles.footer}>
          {
            author && (
              <p className={styles.author} title={author}>{author.length > 20 ? `${author.slice(0, 20)}...` : author}</p>
            )
          }
          <p className={styles.publishedAt}>
            {dayjs(publishedAt).format("MMM D, YYYY")}
          </p>
        </div>
      </a>
    </article>
  );
};

export default NewsArticleCard;
