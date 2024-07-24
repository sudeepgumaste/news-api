import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import clsx from "clsx";

import DisplayCards from "../../templates/display-cards";

import useGetEverything from "../../../queries/use-get-everything";

import sortByOptions, { TSortByOptions } from "../../../constants/sort-by";

import styles from "./styles.module.css";

const CategoryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") as TSortByOptions;

  const { data, isLoading, isError } = useGetEverything({
    q: searchParams.get("q") ?? "",
    page: searchParams.get("page") ?? "1",
    sortBy: sortBy ?? "test",
  });

  const totalPages = useMemo(() => {
    if (data?.totalResults) {
      return Math.ceil(data?.totalResults / 9);
    }
    return 0;
  }, [data?.totalResults]);

  return (
    <div className={styles.layout}>
      <aside className={styles.leftSection}>
        <div>
          <p className={styles.sortByLabel}>Sort By</p>
          <ul className={styles.sortByOptions}>
            {sortByOptions.map((option) => (
              <li key={option.value} className={clsx(styles.sortByOption, { [styles.active]: option.value === sortBy })}>
                <button
                  onClick={() => {
                    setSearchParams((prev) => {
                      prev.set("sortBy", option.value);
                      return prev;
                    });
                  }}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <DisplayCards 
        cards={data?.articles}
        isLoading={isLoading}
        isError={isError}
        totalPages={totalPages}
        title={`Your Results for: ${searchParams.get("q")}`}
      />
      <aside className={styles.rightSection}>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </aside>
    </div>
  );
};

export default CategoryPage;
