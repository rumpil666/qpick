import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleModalActive } from "../../../store/productSlice";
import { Button } from "../Button/Button";
import closeIcon from "../../../images/CloseIcon.svg";
import styles from "./Modal.module.scss";

interface IModalProps {
  children: React.ReactNode
  className?: string
  id?: number
}

export const Modal: React.FC<IModalProps> = ({ children, id, className }) => {
  const active = useAppSelector(state => state.product.modalActive);
  const dispatch = useAppDispatch();

  return (
    <div className={active ? [styles.modal, styles.active].join(' ') : styles.modal} onClick={() => dispatch(toggleModalActive())}>
      <div className={`${styles.modal__content} ${className ? className : ''}`} onClick={(e) => e.stopPropagation()}>
        <Button className={styles.modal__close} icon={closeIcon} onClick={() => dispatch(toggleModalActive())} />
        {children}
      </div>
    </div>
  );
};