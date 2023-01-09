//react, router, mobx
import React, { useState } from "react";

// components
import SettingsAccount from "./SettingsAccount";

export default function InfoDialog() {
  let [currentSetting, setCurrentSetting] = useState("account");

  return (
    <dialog
      id="settingsDialog"
      className="dialog anim-y dialog-padding md:max-w-6xl w-full mx-[20px] md:mx-auto rounded-2xl duration-200"
    >
      <div className="dialog-header">
        <h2 className="title">Настройки.</h2>
        <h3 className="subtitle">Настройки приложения и аккаунта.</h3>
      </div>
      <div className="buttons-navbar w-max mb-[20px] md:mb-[40px]">
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
      {currentSetting === "account" && <SettingsAccount></SettingsAccount>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        onClick={() => {
          const dialog =
            document.querySelector<HTMLDialogElement>("#settingsDialog")!;
          dialog.classList.toggle("anim-y");
          setTimeout(() => {
            dialog.close();
          }, 200);
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
