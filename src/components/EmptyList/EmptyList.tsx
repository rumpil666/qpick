import styles from "./EmptyList.module.scss";
import { Link } from "react-router-dom";

export type EmptyListType = "EmptyList" | "submit" | "reset";

interface IEmptyListProps {
  children?: React.ReactNode
  route: string
  routeName: string
}

export const EmptyList: React.FC<IEmptyListProps> = ({ children, route, routeName }) => {

  return (
    <h2 className={styles.emptyList}>{children} <Link className={styles.emptyList__link} to={route}>{routeName}</Link></h2>
  );
};