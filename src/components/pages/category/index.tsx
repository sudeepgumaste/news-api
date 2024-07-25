import React, { useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import clsx from "clsx";

import CategoryCard from "../../atoms/category-card";
import DisplayCards from "../../templates/display-cards";
import ThreeColumnLayout from "../../layouts/three-column-layout";

import useGetTopHeadlines from "../../../queries/use-get-top-headlines";

import categories, { TCategory } from "../../../constants/categories";

import styles from "./styles.module.css";

const CategoryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { category } = useParams();

  const { data, isLoading, isError } = useGetTopHeadlines({
    category: category as TCategory,
    page: searchParams.get("page") ?? "1",
  });

  const totalPages = useMemo(() => {
    if (data?.totalResults) {
      return Math.ceil(data?.totalResults / 9);
    }
    return 0;
  }, [data?.totalResults]);

  if (
    categories.find((_category) => _category.slug === category) === undefined ||
    category === undefined
  ) {
    return <div>Category not found</div>;
  }

  return (
    <ThreeColumnLayout
      left={
        <>
          <p className={styles.sortByLabel}>Categories</p>
          <ul className={styles.sortByOptions}>
            {categories.map((_category) => (
              <li key={_category.slug} className={clsx(styles.sortByOption)}>
                <CategoryCard
                  slug={_category.slug}
                  isActive={_category.slug === category}
                  isResponsive={true}
                >
                  {_category.name}
                </CategoryCard>
              </li>
            ))}
          </ul>
        </>
      }
      center={
        <DisplayCards
          cards={data?.articles}
          isLoading={isLoading}
          isError={isError}
          totalPages={totalPages}
          title={categories.find((_category) => _category.slug === category)?.name ?? ''}
        />
      }
      right={
        <>
          <Link to="/">Go Back</Link>
        </>
      }
    />
  );
};

export default CategoryPage;
