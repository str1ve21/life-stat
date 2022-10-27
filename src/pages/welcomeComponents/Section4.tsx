import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Section4() {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <section
      id="Аккаунт"
      className="relative h-max bg-gradient-to-b from-app-200 to-app-300 z-40 rounded-[40px]"
    >
      <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[40px] w-full min-h-[80vh] lg:min-h-screen content-padding">
        <div className="flex flex-wrap justify-center p-[10px] gap-[20px] lg:gap-[40px] bg-neutral-200/30 rounded-2xl">
          <button
            onClick={() => {
              setIsLogin((isLogin = true));
            }}
            className={`account-button ${isLogin ? "bg-app-200" : ""}`}
          >
            Вход
          </button>
          <button
            onClick={() => {
              setIsLogin((isLogin = false));
            }}
            className={`account-button ${isLogin ? "" : "bg-app-200"}`}
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
          <h2 className="title mb-0 mx-[20px] md:mx-[40px] text-center">
            {isLogin ? "С возвращением!" : "Добро пожаловать!"}
          </h2>
          <label className="account-label">
            <span className="text-ssp">Логин</span>
            <input type="text" className="account-input" />
          </label>
          <label className="account-label">
            <span className="text-ssp">Пароль</span>
            <input type="password" className="account-input" />
          </label>
          <button className="button w-max mx-auto bg-neutral-100">
            {isLogin ? "Вход" : "Регистрация"}
          </button>
          {/* <Link className="button bg-neutral-100" to="/app">App</Link> */}
        </form>
      </div>
    </section>
  );
}
