import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { App } from "./App";
import "../styles/globals.css";

const MyApp: NextPage<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

export default MyApp;
