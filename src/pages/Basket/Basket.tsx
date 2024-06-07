import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { BasketItem } from '../../components/BasketIem/BasketItem';
import styles from './Basket.module.scss';
import { formatNumber } from '../../utils/utilities';
import { Button } from '../../components/UI/Button/Button';
import { EmptyList } from '../../components/EmptyList/EmptyList';
import { BasketModal } from '../../components/BasketModal/BasketModal';
import { buy, toggleModalActive } from '../../store/productSlice';
import { URL_PAGES } from '../../config/pages-url.config';

export const Basket: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { basketProducts } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const sum = basketProducts.reduce((sum: number, i) => sum + i.price * i.quantity, 0)
    setTotalPrice(sum)
  }, [basketProducts])

  return (
    <main className={styles.basket}>
      <h2 className={styles.basket__title}>Корзина</h2>
      {
        basketProducts.length !== 0
          ? <><div className={styles.basket__container}>
            <ul className={styles.basket__list}>
              {basketProducts?.map((product) => (
                <BasketItem
                  key={product.id}
                  {...product}
                />
              ))
              }
            </ul>
            <div className={styles.basket__order}>
              <div className={styles.basket__total}>
                <span className={styles.basket__subtitle}>Итого</span>
                <span className={styles.basket__subtitle}>$ {formatNumber(totalPrice)}</span>
              </div>
              <Button onClick={() => {
                dispatch(toggleModalActive())
                dispatch(buy())
              }}
                className={styles.basket__btn}>
                Оплатить товар
              </Button>
            </div>
          </div></>
          : <EmptyList route={URL_PAGES.HOME} routeName={'товары'}>В корзине еще нет товаров. Чтобы продолжить покупки перейдите в</EmptyList>
      }
      <BasketModal />
    </main>
  )
};