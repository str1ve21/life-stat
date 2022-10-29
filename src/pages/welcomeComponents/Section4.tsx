import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Section4() {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <section
      id="Аккаунт"
      className="relative h-max bg-gradient-to-b from-app-200 dark:from-app-250 to-app-300 dark:to-app-350 z-40 rounded-[40px]"
    >
      <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[40px] w-full min-h-[80vh] lg:min-h-screen content-padding">
        <div className="flex flex-wrap justify-center p-[10px] gap-[20px] lg:gap-[40px] bg-neutral-200/70 dark:bg-neutral-800/70 rounded-2xl">
          <button
            onClick={() => {
              setIsLogin((isLogin = true));
            }}
            className={`account-button ${
              isLogin
                ? "bg-app-200 dark:bg-app-250"
                : "bg-neutral-100 dark:bg-neutral-900"
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
                ? "bg-neutral-100 dark:bg-neutral-900"
                : "bg-app-200 dark:bg-app-250"
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
          <button className="button w-full mx-auto bg-neutral-100 dark:bg-neutral-900">
            {isLogin ? "Вход" : "Регистрация"}
          </button>
          {isLogin && (
            <div className="flex justify-between gap-[20px]">
              <label className="checkbox-label bg-neutral-100 dark:bg-neutral-900">
                <input type="checkbox" className="checkbox" />
                <span>Запомнить меня</span>
              </label>
              <a
                href="#"
                className="button w-1/2 bg-neutral-100 dark:bg-neutral-900"
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
