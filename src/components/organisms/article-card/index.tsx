import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import dayjs from "dayjs";

import { TNewsArticle } from "../../../types/api-response";

import PlaceholderImage from "../../../assets/images/placeholder.jpeg";

import trackUserActivity from "../../../utils/track-user-activity";

import styles from "./styles.module.css";

const NewsArticleCard: React.FC<TNewsArticle> = ({
  title,
  description,
  url,
  publishedAt,
  urlToImage,
  source,
}) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [_urlToImage, set_urlToImage] = useState(urlToImage);
  const [searchParams] = useSearchParams();

  const maxDescriptionLength = 80;

  const handleBookmark = () => {
    console.log("bookmark");
  };

  const handleImageMissing = () => {
    set_urlToImage(PlaceholderImage);
  };

  if (title === "[Removed]") {
    return null;
  }

  return (
    <article className={styles.article}>
      {/* <button onClick={handleBookmark}>
        
      </button> */}
      <a href={url} onPointerLeave={() => setDescriptionExpanded(false)}>
        <img
          src={_urlToImage ?? PlaceholderImage}
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
                    setDescriptionExpanded((prevValue) => {
                      if(!prevValue){
                        trackUserActivity("read-more", {
                          q: searchParams.get("q"),
                          title: title,
                          description: description,
                          url: url,
                          publishedAt: publishedAt,
                          source: source,
                        });
                      }
                      return !prevValue
                    });
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
          {source && (
            <p className={styles.source} title={source.name}>
              {source.name.length > 20 ? `${source.name.slice(0, 20)}...` : source.name}
            </p>
          )}
          <p className={styles.publishedAt}>
            {dayjs(publishedAt).format("MMM D, YYYY")}
          </p>
        </div>
      </a>
    </article>
  );
};

export default NewsArticleCard;
