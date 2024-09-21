import styles from './Oferta.module.scss';

export const OfertaPage: React.FC = () => {

  return (
    <main className={styles.oferta}>
      <h2 className={styles.oferta__title}>Условия сервиса</h2>
      <p className={styles.subtitle}>
        Данный сервис был сделан как петпроект для развития навыков рабыто с React и Redux.
        Можете покупать любой товар который попадет в корзину. Вводить номер своей карточки необязательно,
        мы его возьмем из слитой информации в интернет.
      </p>
    </main>
  )
};

export default OfertaPage;