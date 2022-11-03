import React, { useState } from "react";
import { getInputValue } from "../../func/getInputValue";
import { useNavigate } from "react-router-dom";
import ISureDialog from "../../interfaces/ISureDialog";
import SDialog from "../../store/SDialog";

export default function Account() {
  const navigation = useNavigate();

  let [isLogin, setIsLogin] = useState(true);
  let [isShowPass, setIsShowPass] = useState(false);

  const wrongDataDialog: ISureDialog = {
    id: "wrongData",
    title: ``,
    text: ``,
    yesText: "Попробовать ещё",
    noText: "Закрыть",
    isYesFunc: false,
    isNoFunc: true,
    noFunction: () => {
      document
        .querySelector<HTMLDialogElement>("#" + wrongDataDialog.id)!
        .close();
      SDialog.deleteDialog();
    },
  };

  async function accountLogic() {
    const data = {
      username: getInputValue("#input-login"),
      password: getInputValue("#input-password"),
    };

    const postBody: RequestInit = {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    if (data.username.length < 3) {
      wrongDataDialog.title = `Короткий логин.`;
      wrongDataDialog.text = `Длинна логина должна быть длиннее 4 символов.`;
      SDialog.createDialog(wrongDataDialog);
      return;
    }

    if (data.password.length < 7) {
      wrongDataDialog.title = `Ненадежный пароль.`;
      wrongDataDialog.text = `Пароль должен быть длиннее 8 символов.`;
      SDialog.createDialog(wrongDataDialog);
      return;
    }

    if (isLogin) {
      const response = await fetch("http://0.0.0.0:8000/login", postBody);
      if (response.status === 200) {
        navigation("/app");
      } else {
        wrongDataDialog.title = `Неверный логин или пароль.`;
        wrongDataDialog.text = `Вероятно, что вы ввели неверный логин или пароль. Код ошибки: ${response.status}`;
        SDialog.createDialog(wrongDataDialog);
      }
      return;
    }
    const response = await fetch("http://0.0.0.0:8000/register", postBody);
    if (response.status === 200) {
      setIsLogin((isLogin = true));
      wrongDataDialog.title = `Регистрация успешна.`;
      wrongDataDialog.text = `Теперь вы можете войти в свой аккаунт.`;
      SDialog.createDialog(wrongDataDialog);
    } else {
      wrongDataDialog.title = `Пользователь уже существует.`;
      wrongDataDialog.text = `Пользователь с таким логином уже существует. Код ошибки: ${response.status}`;
      SDialog.createDialog(wrongDataDialog);
    }
  }

  return (
    <section
      id="Аккаунт"
      className="relative h-max bg-gradient-to-b from-app-100 dark:from-app-150 to-app-200 dark:to-app-250 z-50 rounded-b-[40px]"
    >
      <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[40px] w-full min-h-[700px] lg:min-h-screen content-padding">
        <div className="flex flex-wrap justify-center p-[10px] gap-[20px] lg:gap-[40px] bg-neutral-100/50 dark:bg-neutral-800/50 rounded-2xl">
          <button
            onClick={() => {
              setIsLogin((isLogin = true));
            }}
            className={`account-button ${
              isLogin
                ? "bg-app-100 dark:bg-app-150"
                : "bg-neutral-200 dark:bg-neutral-800"
            }`}
          >
            Вход
          </button>
          <button
            onClick={() => {
              setIsLogin((isLogin = false));
            }}
            className={`account-button ${
              isLogin
                ? "bg-neutral-200 dark:bg-neutral-800"
                : "bg-app-100 dark:bg-app-150"
            }`}
          >
            Регистрация
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="account-form"
        >
          <h2 className="title my-0 md:mb-[20px] md:mx-[40px] text-center">
            {isLogin ? "С возвращением!" : "Добро пожаловать!"}
          </h2>
          <label className="account-label">
            <span className="text-ssp ml-3">Логин</span>
            <input type="text" id="input-login" className="account-input" />
          </label>
          <label className="account-label relative">
            <span className="text-ssp ml-3">Пароль</span>
            <input
              type={isShowPass ? "text" : "password"}
              id="input-password"
              className="account-input"
            />
            <svg
              onClick={() => {
                setIsShowPass(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`icon absolute bottom-[15px] lg:bottom-[10px] right-[10px] cursor-pointer z-[100] ${
                isShowPass ? "hidden" : "block"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
            <svg
              onClick={() => {
                setIsShowPass(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`icon absolute bottom-[15px] lg:bottom-[10px] right-[10px] cursor-pointer z-[100] ${
                isShowPass ? "block" : "hidden"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </label>
          <button
            onClick={accountLogic}
            type="submit"
            className="button w-full mx-auto bg-neutral-200 dark:bg-neutral-800"
          >
            {isLogin ? "Вход" : "Регистрация"}
          </button>
          {isLogin && (
            <div className="flex flex-col md:flex-row gap-[20px]">
              <label className="checkbox-label w-full md:w-1/2 bg-neutral-200 dark:bg-neutral-800">
                <input type="checkbox" className="checkbox" />
                <span>Запомнить меня</span>
              </label>
              <a
                href="#"
                className="button w-full md:w-1/2 bg-neutral-200 dark:bg-neutral-800"
              >
                Забыли пароль?
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
