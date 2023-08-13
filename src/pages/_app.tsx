import "@/styles/globals.css";
import type {AppProps} from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import {store} from "@/app/store";
import {Provider} from "react-redux";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
