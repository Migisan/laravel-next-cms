import axios from "axios";
import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

const Register: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * 名前入力欄
   * @param e
   */
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

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
   * 登録ボタン押下
   */
  const handleClickRegister = async () => {
    const registerParams = { name, email, password };

    // CSRF保護の初期化
    await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`
    );

    // 登録
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`,
      registerParams
    );
    console.log(res);
  };

  return (
    <>
      <div>
        名前
        <input type="text" onChange={changeName} />
      </div>
      <div>
        メールアドレス
        <input type="text" onChange={changeEmail} />
      </div>
      <div>
        パスワード
        <input type="text" onChange={changePassword} />
      </div>
      <div>
        <button onClick={handleClickRegister}>登録</button>
      </div>
    </>
  );
};

export default Register;
