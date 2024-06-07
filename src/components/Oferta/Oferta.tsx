import styles from './Oferta.module.scss';

export const Oferta: React.FC = () => {

  return (
    <main className={styles.oferta}>
      <h2 className={styles.oferta__title}>Условия сервиса</h2>
          <p className={styles.subtitle}>
            Данный сервис был сделан в ходе выполнения тестового задания в компанию "Neoflex".
            Используя данный сервис вы обязуетесь дать развернутую обратную связь &#40;шутка&#41;.
            Можете покупать любой товар который попадет в корзину. Вводить номер своей карточки необязательно,
            мы его возьмем из слитой информации в интернет.
          </p>
    </main>
  )
};