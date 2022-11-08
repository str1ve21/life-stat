import React, { useState } from "react";

export default function InfoDialog() {
  let [currentSetting, setCurrentSetting] = useState("account");
  return (
    <dialog
      id="settingsDialog"
      className="dialog mx-[20px] md:mx-auto md:max-w-6xl w-full dialog-padding rounded-2xl"
    >
      <div className="dialog-header">
        <h2 className="title">Настройки.</h2>
        <h3 className="subtitle">
          Настройки приложения... Ожидаемо, наверное.
        </h3>
      </div>
      <p className="text">
        Люди добровые, извините, в разработке, пока нечего настраивать.
      </p>
      {/* <div className="buttons-navbar w-max mb-[20px] md:mb-[40px]">
        <button
          onClick={() => {
            setCurrentSetting("account");
          }}
          className={`button ${
            currentSetting === "account"
              ? "bg-app-100 dark:bg-app-150"
              : "bg-neutral-200 dark:bg-neutral-800"
          }`}
        >
          Аккаунт
        </button>
        <button
          onClick={() => {
            setCurrentSetting("app");
          }}
          className={`button ${
            currentSetting === "app"
              ? "bg-app-100 dark:bg-app-150"
              : "bg-neutral-200 dark:bg-neutral-800"
          }`}
        >
          Приложение
        </button>
      </div>
      {currentSetting === "account" && <div>acc</div>} */}
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
