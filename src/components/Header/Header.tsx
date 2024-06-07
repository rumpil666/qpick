import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import basket from "../../images/basket.svg";
import favourites from "../../images/favourites.svg";
import { Logo } from "../Logo/Logo";
import { useAppSelector } from "../../store/hooks";
import { URL_PAGES } from '../../config/pages-url.config';


export const Header: React.FC = () => {
  const { basketProducts, favouriteProducts } = useAppSelector(state => state.product);

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__links}>
        <Link className={styles.header__link} to={URL_PAGES.FAVOURITES}>
          <img className={styles.header__link_img} src={favourites} alt="favourites" />
          <span className={styles.header__count}>{favouriteProducts.length ? favouriteProducts.length : ''}</span>
        </Link>
        <Link className={styles.header__link} to={URL_PAGES.BASKET}>
          <img className={styles.header__link_img} src={basket} alt="basket" />
          <span className={styles.header__count}>{basketProducts.length ? basketProducts.length : ''}</span>
        </Link>
      </div>
    </header>
  );
};