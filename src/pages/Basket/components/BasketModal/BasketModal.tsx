import { Modal } from "@/components/UI/Modal/Modal";
import styles from "./BasketModal.module.scss";

export const BasketModal: React.FC = () => {

  return (
    <Modal className={styles.basketModal}>
      <img className={styles.basketModal__img} src='https://cdn.dribbble.com/users/3874322/screenshots/15083246/urb_supermarket.gif' alt='basket' />
      <p className={styles.basketModal__title}>Товар был успешно оплачен, спасибо за покупку</p>
    </Modal>
  );
}