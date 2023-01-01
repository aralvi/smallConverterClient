import "@styles/bootstrap.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@styles/globals.css";
import Layout from "@components/Layout";
import { Provider } from "react-redux";
import Store from "@redux/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
