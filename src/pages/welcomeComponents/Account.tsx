import React, { useState } from "react";

export default function Account() {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <section id="Аккаунт" className="relative h-max z-50 rounded-[40px]">
      <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[40px] w-full min-h-[80vh] lg:min-h-screen content-padding">
        <div className="flex flex-wrap justify-center p-[10px] gap-[20px] lg:gap-[40px] bg-neutral-100/50 dark:bg-neutral-800/50 rounded-2xl">
          <button
            onClick={() => {
              setIsLogin((isLogin = true));
            }}
            className={`account-button ${
              isLogin
                ? "bg-app-300 dark:bg-app-350"
                : "bg-neutral-300 dark:bg-neutral-700"
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
                ? "bg-neutral-300 dark:bg-neutral-700"
                : "bg-app-300 dark:bg-app-350"
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
          <button className="button w-full mx-auto bg-neutral-300 dark:bg-neutral-700">
            {isLogin ? "Вход" : "Регистрация"}
          </button>
          {isLogin && (
            <div className="flex justify-between gap-[20px]">
              <label className="checkbox-label bg-neutral-300 dark:bg-neutral-700">
                <input type="checkbox" className="checkbox" />
                <span>Запомнить меня</span>
              </label>
              <a
                href="#"
                className="button w-1/2 bg-neutral-300 dark:bg-neutral-700"
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
