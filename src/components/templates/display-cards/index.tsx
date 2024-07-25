import React from "react";
import { TNewsArticle } from "../../../types/api-response";
import NewsArticleCard from "../../organisms/article-card";
import SkeletonLoaderArticleCard from "../../molecules/skeleton-loader-article-card";
import Pagination from "../../molecules/pagination";

import styles from "./styles.module.css";
import { useSearchParams } from "react-router-dom";

type Props = {
  cards?: TNewsArticle[];
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
  title: string;
};

const DisplayCards: React.FC<Props> = ({
  cards,
  isLoading,
  isError,
  totalPages,
  title,
}) => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? 1;

  return (
    <div className={styles.centerSection}>
      <h1>{title}</h1>
      <div className={styles.articleList}>
        {
          isError &&
          <div className={styles.errorMessage}>
            <p>Something went wrong. Please try again later.</p>
          </div>
        }
        {isLoading &&
          Array.from({ length: 9 }).map((_, index) => (
            <SkeletonLoaderArticleCard key={index} />
          ))}
        {cards?.map((article, index) => (
          <NewsArticleCard key={index} {...article} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={Number(page)} />
    </div>
  );
};

export default DisplayCards;
