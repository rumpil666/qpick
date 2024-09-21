import styles from "./Category.module.scss";
import { useAppSelector } from '@/store/hooks';
import { ProductItem } from "@/components/ProductItem/ProductItem";
import { ProductModal } from "@/components/ProductModal/ProductModal";

interface ICategory {
  name: string
}

export const Category: React.FC<ICategory> = ({ name }) => {
  const categoryes = useAppSelector(state => state.product.category);

  return (
    <section key={name} className={styles.category}>
      <h2 className={styles.category__title}>{name}</h2>
      <ul className={styles.category__list}>
        {categoryes[`${name}`]?.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
          />
        ))
        }
      </ul>
      <ProductModal />
    </section>
  );
};