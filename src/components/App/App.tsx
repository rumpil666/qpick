import { useEffect } from "react";
import { Basket } from "../../pages/Basket/Basket";
import { Favourites } from "../../pages/Favourites/Favourites";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { URL_PAGES } from '../../config/pages-url.config';
import styles from "./App.module.scss";
import {
  Route,
  Routes
} from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { fetchProducts } from "../../store/productSlice";
import { Contacts } from "../../pages/Contacts/Contacts";
import { Oferta } from "../../pages/Oferta/Oferta";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route
          path={URL_PAGES.FAVOURITES}
          element={<Favourites />}
        />
        <Route
          path={URL_PAGES.BASKET}
          element={<Basket />}
        />
        <Route
          path={URL_PAGES.CONTACTS}
          element={<Contacts />}
        />
        <Route
          path={URL_PAGES.OFFERT}
          element={<Oferta />}
        />
        <Route
          path={URL_PAGES.HOME}
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  )
}