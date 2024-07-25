import React from "react";
import { Link } from "react-router-dom";

import { TCategory } from "../../../constants/categories";
import trackUserActivity from "../../../utils/track-user-activity";

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
      data-testid="category-card"
      to={`/category/${slug}`}
      className={clsx(styles.categoryCard, {
        [styles.active]: isActive,
        [styles.responsive]: isResponsive,
      })}
      onClick={() => trackUserActivity('click-category', { category: slug })}
    >
      {children}
    </Link>
  );
};

export default CategoryCard;
