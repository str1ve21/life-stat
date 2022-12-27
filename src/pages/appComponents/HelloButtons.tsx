// react, router, mobx
import React from "react";

// stores
import SCounterDialog from "../../store/SCounterDialog";

// interfaces
import ICounterDialog from "../../interfaces/ICounterDialog";

export default function HelloButtons() {
  const createCounterDialog: ICounterDialog = {
    id: "",
    text: "Добавление счётчика.",
    title:
      "Здесь вы можете создать новый счётчик со своими параметрами, и кастомизировать его. Необязательными являются заголовок, описание и цель.",
    buttonText: "Создать",
    isEdit: false,
  };

  return (
    <div
      id="buttons"
      className="flex flex-wrap content-gap w-full justify-center"
    >
      <button
        onClick={() => {
          SCounterDialog.createDialog(createCounterDialog);
        }}
        aria-label="Создать счётчик"
        className="button bg-emerald-300 dark:bg-emerald-600"
      >
        Создать счётчик
      </button>
      <button
        onClick={() => {
          const dialog =
            document.querySelector<HTMLDialogElement>("#settingsDialog")!;
          dialog.showModal();
          dialog.classList.toggle("dialog-anim");
        }}
        aria-label="Настройки приложения"
        className="button bg-sky-300 dark:bg-sky-600"
      >
        Настройки
      </button>
    </div>
  );
}
