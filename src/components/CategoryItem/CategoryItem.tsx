import styles from "./CategoryItem.module.scss";
import Like from "../../images/like.svg";
import LikeActive from "../../images/likeActive.svg";
import Rating from "../../images/raring.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addProductFromFavourites, addProductInBasket, addProductInModal, removeProductFromFavourites, toggleModalActive } from "../../store/productSlice";
import { formatNumber, checkItemInArr } from '../../utils/utilities';
import { Button } from "../UI/Button/Button";

export interface IRating {
  rate: number
  count: number
}

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export const CategoryItem: React.FC<IProduct> = ({ id, title, price, image, rating }) => {
  const { basketProducts, favouriteProducts } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  return (
    <>
      <li key={id} className={styles.categoryItem}>
        <Button
          className={styles.categoryItem__like}
          onClick={() => {
            if (checkItemInArr(id, favouriteProducts)) {
              dispatch(removeProductFromFavourites(id))
            } else {
              dispatch(addProductFromFavourites(id))
            }
          }}
          icon={checkItemInArr(id, favouriteProducts) ? LikeActive : Like}
        ></Button>
        <img className={styles.categoryItem__img} src={image} alt={title} />
        <Button
          onClick={() => {
            dispatch(toggleModalActive())
            dispatch(addProductInModal(id))
          }}
          className={styles.categoryItem__detailed}
        >
          {'О товаре'}
        </Button>
        <div className={styles.categoryItem__container}>
          <div className={styles.categoryItem__flexColumn}>
            <span className={styles.categoryItem__title}>{title}</span>
            <div className={styles.categoryItem__rating}>
              <img className={styles.categoryItem__icon} src={Rating} alt='rating' />
              <span className={styles.categoryItem__subtitle}>{rating.rate}</span>
            </div>
          </div>
          <div className={styles.categoryItem__flexColumn}>
            <div className={styles.categoryItem__priceContainer}>
              <span className={styles.categoryItem__price}>{formatNumber(price)} $</span>
              <span className={styles.categoryItem__sale}></span>
            </div>
            <Button
              style={{ minWidth: '84px' }}
              disabled={checkItemInArr(id, basketProducts)}
              onClick={() => dispatch(addProductInBasket(id))}
              className={styles.categoryItem__btn}
            >
              {checkItemInArr(id, basketProducts) ? "В корзине" : "Купить"}
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};