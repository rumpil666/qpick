import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.scss";
import lang from "../../images/lang.svg";
import vk from "../../images/VK.svg";
import telegram from "../../images/Telegram.svg";
import whatsapp from "../../images/Whatsapp.svg";
import { NavigateLink } from "../UI/NavigateLink/NavigateLink";
import { URL_PAGES } from '../../config/pages-url.config';

export const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.footer__container}>
        <nav id="sidebar" className={styles.footer__links}>
          <NavigateLink to={URL_PAGES.FAVOURITES}>Избранное</NavigateLink>
          <NavigateLink to={URL_PAGES.BASKET}>Корзина</NavigateLink>
          <NavigateLink to={URL_PAGES.CONTACTS}>Контакты</NavigateLink>
        </nav>
        <nav className={styles.footer__links}>
          <NavigateLink to={URL_PAGES.OFFERT}>Условия сервиса</NavigateLink>
          <div className={styles.footer__lang}>
            <img className={styles.footer__img} src={lang} alt="language" />
            <NavLink className={styles.footer__linkLang_active} to="#">Рус</NavLink>
            <NavLink className={styles.footer__linkLang} to="#">Eng</NavLink>
          </div>
        </nav>
      </div>
      <div className={styles.footer__social}>
        <a className={styles.footer__link} href="https://vk.com/perwak" target="_blank" rel="noopener noreferrer">
          <img src={vk} alt="vk" />
        </a>
        <a className={styles.footer__link} href="https://t.me/perwak" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
        <a className={styles.footer__link} href="https://wa.me/+79869991938" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </footer>
  );
};