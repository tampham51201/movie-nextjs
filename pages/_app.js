import Layout from "../components/Layout";

import { SessionProvider } from "next-auth/react";
import "../assets/icon/boxicons-2.0.7/css/boxicons.min.css";
import "antd/dist/antd.css";
import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
