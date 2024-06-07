import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from "../../images/logo.svg";
import { URL_PAGES } from '../../config/pages-url.config';

export const Logo: React.FC = () => {

  return (
    <Link className={styles.logo} to={URL_PAGES.HOME}>
      <img className={styles.logo__img} src={logo} alt="Логотип сайта" />
    </Link>
  )
};