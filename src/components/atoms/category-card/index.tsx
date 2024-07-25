import React from "react";
import { Link } from "react-router-dom";

import { TCategory } from "../../../constants/categories";

import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  slug: TCategory;
  children: React.ReactNode;
  isActive?: boolean;
  isResponsive?: boolean;
};

const CategoryCard: React.FC<Props> = ({
  slug,
  children,
  isActive,
  isResponsive,
}) => {
  return (
    <Link
      to={`/category/${slug}`}
      className={clsx(styles.categoryCard, {
        [styles.active]: isActive,
        [styles.responsive]: isResponsive,
      })}
    >
      {children}
    </Link>
  );
};

export default CategoryCard;
