import styles from "./BasketItem.module.scss";
import deleteIcon from "@/images/Delete.svg";
import minusIcon from "@/images/Minus.svg";
import plusIcon from "@/images/Plus.svg";
import type { IBasketProduct } from "@/store/types";
import { useAppDispatch } from "@/store/hooks";
import { countMinus, countPlus, removeProduct } from "@/store/productSlice";
import { formatNumber } from '@/utils/utilities';
import { Button } from "@/components/UI/Button/Button";

export const BasketItem: React.FC<IBasketProduct> = ({ id, title, price, image, quantity, rating }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.basketItem}>
      <div className={styles.basketItem__container}>
        <img className={styles.basketItem__img} src={image} alt={title} />
        <div className={styles.basketItem__count}>
          <Button disabled={quantity === 1 ? true : false} onClick={() => dispatch(countMinus(id))} icon={minusIcon}></Button>
          <span className={styles.basketItem__quantity}>{quantity}</span>
          <Button disabled={quantity === rating.count ? true : false} onClick={() => dispatch(countPlus(id))} icon={plusIcon}></Button>
        </div>
      </div>
      <div className={styles.basketItem__description}>
        <span className={styles.basketItem__title}>{title}</span>
        <span className={styles.basketItem__price}>{formatNumber(price)} ₽</span>
      </div>
      <div className={styles.basketItem__container_price}>
        <Button onClick={() => dispatch(removeProduct(id))} icon={deleteIcon}></Button>
        <span className={styles.basketItem__total}>{formatNumber(price * quantity)} ₽</span>
      </div>
    </li>
  );
};