import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

type Props = {
  slug: string;
  children: React.ReactNode;
};

const CategoryCard: React.FC<Props> = ({ slug, children }) => {
  return (
    <Link to={`/category/${slug}`} className={styles.categoryCard}>{children}</Link>
  );
};

export default CategoryCard;
