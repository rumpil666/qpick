import { Category } from '../Category/Category';
import { Loader } from '../Loader/Loader';
import styles from './Home.module.scss';
import { useAppSelector } from "../../store/hooks";

export const Home: React.FC = () => {
  const { error, loading } = useAppSelector(state => state.product);
  const { category } = useAppSelector(state => state.product);

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