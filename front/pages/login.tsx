import axios from "axios";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * メールアドレス入力欄
   * @param e
   */
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  /**
   * メールアドレス入力欄
   * @param e
   */
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  /**
   * ログインボタン押下
   */
  const handleClickLogin = async () => {
    const loginParams = { email, password };

    // CSRF保護の初期化
    await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`
    );

    // ログイン
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
      loginParams
    );
    console.log(res);
  };

  /**
   * ログアウトボタン押下
   */
  const handleClickLogout = async () => {
    // ログアウト
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/logout`
    );
    console.log(res);
  };

  /**
   * ユーザー情報取得
   */
  const handleClickUser = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`
    );
    console.log(res);
  };

  /**
   * ユーザー情報取得
   */
  const handleClickMe = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/me`
    );
    console.log(res);
  };

  return (
    <>
      <div>
        メールアドレス
        <input type="text" onChange={changeEmail} />
      </div>
      <div>
        パスワード
        <input type="text" onChange={changePassword} />
      </div>
      <div>
        <button onClick={handleClickLogin}>ログイン</button>
      </div>
      <div>
        <button onClick={handleClickLogout}>ログアウト</button>
      </div>
      <div>
        <button onClick={handleClickUser}>ユーザー情報</button>
      </div>
      <div>
        <button onClick={handleClickMe}>ユーザー情報</button>
      </div>
    </>
  );
};

export default Login;
