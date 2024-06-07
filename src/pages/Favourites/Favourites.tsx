import styles from './Favourites.module.scss';
import { useAppSelector } from '../../store/hooks';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';
import { EmptyList } from '../../components/EmptyList/EmptyList';
import { ProductModal } from '../../components/ProductModal/ProductModal';
import { URL_PAGES } from '../../config/pages-url.config';

export const Favourites: React.FC = () => {
  const { favouriteProducts } = useAppSelector(state => state.product);

  return (
    <main className={styles.favourites}>
      <h2 className={styles.favourites__title}>Избранное</h2>
      {
        favouriteProducts.length !== 0
          ? <ul className={styles.favourites__list}>
            {favouriteProducts.map((product) => (
              <CategoryItem
                key={product.id}
                {...product}
              />
            ))
            }
          </ul>
          : <EmptyList route={URL_PAGES.HOME} routeName={'товары'}>В избранном еще нет товаров. Чтобы продолжить покупки перейдите в</EmptyList>
      }
      <ProductModal />
    </main>
  )
};