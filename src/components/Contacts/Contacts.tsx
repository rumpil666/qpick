import styles from './Contacts.module.scss';
import avatar from "../../images/avatar.jpg";

export const Contacts: React.FC = () => {

  return (
    <main className={styles.contacts}>
      <h2 className={styles.contacts__title}>Frontend-разработчик</h2>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__bio}>
          <h3 className={styles.contacts__subtitle}>Антон</h3>
          <p className={styles.contacts__profession}>Фронтенд-разработчик, 28 лет</p>
          <p className={styles.contacts__textInfo}>
            Я родился в городе Пугачеве, а сейчас живу в Саратове, закончил
            факультет нано- и биомедицинских технологий СГУ. Дополнительно окончил
            курс Яндекс.Практикума, по направлению - Frontend-разработчик.У меня есть жена,
            которая мне подарила сыночка - Марка. В свободное время люблю
            смотреть сериалы и аниме. Еще в детстве смотрел "Шаман кинг",
            "Самурай Икс" по СТС и до сих пор смотрю бессконечный "One Piece" и
            новый, но не менее крутой "Клинок рассекающий демонов". Так же,
            люблю волейбол. Работаю в компании "Русагро".
          </p>
          <p className={styles.contacts__profession}>Используемый стек</p>
          <p className={styles.contacts__textInfo}>
            Сайт был разработан на React с использованием сборщика Vite, стейт менеджера Redux Toolkit,
            Redux Persist для сохранения информации в localStorage. Для стилизации использовался
            SCSS. 
          </p>
          <ul className={styles.contacts__contacts}>
            <li>
              <a
                className={styles.contacts__link}
                href="https://github.com/rumpil666"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className={styles.contacts__link}
                href="https://vk.com/perwak"
                target="_blank"
                rel="noreferrer"
                title="ВКонтакте"
              >
                ВКонтакте
              </a>
            </li>
            <li>
              <a
                className={styles.contacts__link}
                href="mailto:rumpil666@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="Почта"
              >
                GMail
              </a>
            </li>
          </ul>
        </div>
        <img className={styles.contacts__avatar} src={avatar} alt="Машков Антон" />
      </div>
    </main>
  )
};