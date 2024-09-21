import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from '@/store/store';
import { Loader } from "@/components/Loader/Loader";

export const withRedux = (component: () => React.ReactNode) => () => (
    <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor}>
            {component()}
        </PersistGate>
    </Provider>
);