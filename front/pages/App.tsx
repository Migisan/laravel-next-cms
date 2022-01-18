import { NextPage } from "next";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchMessage } from "../store/test";

export const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return <Component {...pageProps} />;
};
