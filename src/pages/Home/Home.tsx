import { Category } from './components/Category/Category';
import { Loader } from '@/components/Loader/Loader';
import styles from './Home.module.scss';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from 'react';
import { fetchProducts } from '@/store/productSlice';

const HomePage: React.FC = () => {
  const { error, loading } = useAppSelector(state => state.product);
  const { category } = useAppSelector(state => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <main className={styles.home}>
      {loading && <Loader />}
      {error && <h2 className={styles.home__title}>{error}</h2>}
      {
        Object.keys(category).map((name) => (
          <Category
            key={name}
            name={name}
          />
        ))
      }
    </main>
  )
};

export default HomePage;