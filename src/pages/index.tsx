import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import { URL_PAGES } from '@/config/pages-url.config';

const HomePage = lazy(() => import("@/pages/Home"));
const FavouritesPage = lazy(() => import("./Favourites"));
const BasketPage = lazy(() => import("./Basket"));
const ContactsPage = lazy(() => import("./Contacts"));
const OfertaPage = lazy(() => import("./Oferta"));
const NotFoundPage = lazy(() => import("./NotFound"));

export const Routing = () => {
    return (
        <Routes>
            <Route
                path={URL_PAGES.FAVOURITES}
                element={<FavouritesPage />}
            />
            <Route
                path={URL_PAGES.BASKET}
                element={<BasketPage />}
            />
            <Route
                path={URL_PAGES.CONTACTS}
                element={<ContactsPage />}
            />
            <Route
                path={URL_PAGES.OFFERT}
                element={<OfertaPage />}
            />
            <Route
                path={URL_PAGES.HOME}
                element={<HomePage />}
            />
            <Route
                path="*"
                element={<NotFoundPage />}
            />
        </Routes>
    );
};