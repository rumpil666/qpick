import styles from "./App.module.scss";
import { Routing } from "@/pages";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { withProviders } from "./providers";

const App: React.FC = () => {

  return (
    <div className={styles.app}>
      <Header />
        <Routing />
      <Footer />
    </div>
  )
}

export default withProviders(App);