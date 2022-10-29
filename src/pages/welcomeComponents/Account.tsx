import React, { useState } from "react";

export default function Account() {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <section
      id="Аккаунт"
      className="relative h-max bg-gradient-to-b from-app-100 dark:from-app-150 to-app-200 dark:to-app-250 z-50 rounded-b-[40px]"
    >
      <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[40px] w-full min-h-screen content-padding">
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
            <input type="text" className="account-input" />
          </label>
          <label className="account-label">
            <span className="text-ssp ml-3">Пароль</span>
            <input type="password" className="account-input" />
          </label>
          <button className="button w-full mx-auto bg-neutral-200 dark:bg-neutral-800">
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
