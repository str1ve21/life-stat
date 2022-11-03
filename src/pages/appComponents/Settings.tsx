import React from "react";

export default function InfoDialog() {
  return (
    <dialog
      id="settingsDialog"
      className="dialog mx-[20px] md:mx-auto md:max-w-6xl w-full dialog-padding rounded-2xl"
    >
      <div className="dialog-header">
        <h2 className="title">Настройки</h2>
        <h3 className="subtitle">
          Настройки приложения... Ожидаемо, наверное.
        </h3>
      </div>
      <div className="buttons-navbar">
        <button
          onClick={() => {}}
          className={`button ${
            ""
            // isLogin
            //   ? "bg-app-100 dark:bg-app-150"
            //   : "bg-neutral-200 dark:bg-neutral-800"
          }`}
        >
          Вход
        </button>
        <button
          onClick={() => {}}
          className={`button ${
            ""
            // isLogin
            //   ? "bg-neutral-200 dark:bg-neutral-800"
            //   : "bg-app-100 dark:bg-app-150"
          }`}
        >
          Регистрация
        </button>
      </div>
      <div></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        onClick={() => {
          document.querySelector<HTMLDialogElement>("#settingsDialog")?.close();
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </dialog>
  );
}
