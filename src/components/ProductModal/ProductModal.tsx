import { Button } from "../UI/Button/Button";
import { Modal } from "../UI/Modal/Modal";
import Like from "../../images/like.svg";
import LikeActive from "../../images/likeActive.svg";
import Rating from "../../images/raring.svg";
import styles from "./ProductModal.module.scss";
import { formatNumber, checkItemInArr } from '../../utils/utilities';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addProductFromFavourites, addProductInBasket, removeProductFromFavourites } from "../../store/productSlice";

export const ProductModal: React.FC = () => {
  const { basketProducts, favouriteProducts, productModal } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  return (
    <Modal id={productModal!.id} className={styles.productModal}>
      <img className={styles.productModal__img} src={productModal!.image} alt={productModal!.title} />
      <div className={styles.productModal__containner}>
        <h2 className={styles.productModal__title}>{productModal!.title}</h2>
        <div className={styles.productModal__rating}>
          <img className={styles.productModal__icon} src={Rating} alt='rating' />
          <span className={styles.productModal__subtitle}>{productModal!.rating.rate}</span>
        </div>
        <span className={styles.productModal__price}>{formatNumber(productModal!.price)} ₽</span>
        <p className={styles.productModal__description}>{productModal?.description}</p>
        <div className={styles.productModal__buttons}>
          <Button
            disabled={checkItemInArr(productModal!.id, basketProducts)}
            onClick={() => dispatch(addProductInBasket(productModal!.id))}
            className={styles.productModal__btn}
          >
            {checkItemInArr(productModal!.id, basketProducts) ? "В корзине" : "Добавить в корзину"}
          </Button>
          <Button
            className={styles.productModal__like}
            onClick={() => {
              if (checkItemInArr(productModal!.id, favouriteProducts)) {
                dispatch(removeProductFromFavourites(productModal!.id))
              } else {
                dispatch(addProductFromFavourites(productModal!.id))
              }
            }}
            icon={checkItemInArr(productModal!.id, favouriteProducts) ? LikeActive : Like}
          ></Button>
        </div>
      </div>
    </Modal>
  );
};