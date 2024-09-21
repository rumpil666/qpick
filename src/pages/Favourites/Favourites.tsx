import styles from './Favourites.module.scss';
import { useAppSelector } from '@/store/hooks';
import { ProductItem } from '@/components/ProductItem/ProductItem';
import { EmptyList } from '@/components/EmptyList/EmptyList';
import { ProductModal } from '@/components/ProductModal/ProductModal';
import { URL_PAGES } from '@/config/pages-url.config';

const FavouritesPage: React.FC = () => {
  const { favouriteProducts } = useAppSelector(state => state.product);

  return (
    <main className={styles.favourites}>
      <h2 className={styles.favourites__title}>Избранное</h2>
      {
        favouriteProducts.length !== 0
          ? <ul className={styles.favourites__list}>
            {favouriteProducts.map((product) => (
              <ProductItem
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

export default FavouritesPage;