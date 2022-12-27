// react, router, mobx
import React, { useEffect } from "react";

// plugins, libs
import { v4 as uuidv4 } from "uuid";

// stores
import SCounters from "../../store/SCounters";
import SCounterDialog from "../../store/SCounterDialog";

// local functions
import { findCounterByID } from "../../func/currentCounter";
import { getInputValue } from "../../func/getInputValue";

// interfaces
import IAddInputsArray from "../../interfaces/IAddInputsArray";
import ICounter from "../../interfaces/ICounter";
import ICounterDialog from "../../interfaces/ICounterDialog";

export default function AddDialog() {
  const dialogElementData: ICounterDialog = SCounterDialog.counterDialogData[0];

  const currentCounter: ICounter | undefined = findCounterByID(
    dialogElementData.id
  );

  const AddInputsArray: IAddInputsArray[] = [
    {
      id: 0,
      type: "text",
      htmlId: "titleInput",
      labelText: "Заголовок",
      placeholder: "Счётчик",
      defValue: dialogElementData.isEdit ? currentCounter?.title : "",
    },
    {
      id: 1,
      type: "text",
      htmlId: "descriptionInput",
      labelText: "Описание",
      placeholder: "Мой первый счётчик",
      defValue: dialogElementData.isEdit ? currentCounter?.description : "",
    },
    {
      id: 2,
      type: "number",
      htmlId: "countInput",
      labelText: "Значение",
      placeholder: "Станд.: 0",
      defValue: dialogElementData.isEdit ? currentCounter?.counter : "0",
    },
    {
      id: 3,
      type: "number",
      htmlId: "goalInput",
      labelText: "Цель",
      placeholder: "Станд.: 0",
      defValue: dialogElementData.isEdit ? currentCounter?.goal : "0",
    },
    {
      id: 4,
      type: "number",
      htmlId: "defaultInput",
      labelText: "Стандартное значение ввода",
      placeholder: "Станд.: 1",
      defValue: dialogElementData.isEdit ? currentCounter?.defaultInput : "1",
    },
    {
      id: 5,
      type: "color",
      htmlId: "borderColorInput",
      labelText: "Цвет фона",
      defValue: dialogElementData.isEdit ? currentCounter?.color : "#FF9B41",
    },
    {
      id: 6,
      type: "color",
      htmlId: "textColorInput",
      labelText: "Цвет текста",
      defValue: dialogElementData.isEdit
        ? currentCounter?.textColor
        : "#000000",
    },
  ];

  function sendCounterData() {
    const tempItem: ICounter = {
      id: "",
      dateID: 0,
      lastEdit: Date.now(),
      title: getInputValue("#titleInput"),
      description: getInputValue("#descriptionInput"),
      counter: +getInputValue("#countInput"),
      goal: +getInputValue("#goalInput"),
      defaultInput: +getInputValue("#defaultInput"),
      color: getInputValue("#borderColorInput"),
      textColor: getInputValue("#textColorInput"),
    };
    if (currentCounter && dialogElementData.isEdit) {
      tempItem.id = currentCounter.id;
      tempItem.dateID = currentCounter.dateID;
      SCounters.editCounter(tempItem);
      document.querySelector<HTMLInputElement>(
        `#CounterInput${currentCounter.id}`
      )!.value = `${tempItem.defaultInput}`;
      return;
    }
    tempItem.id = uuidv4();
    tempItem.dateID = Date.now();
    SCounters.addCounter(tempItem);
  }

  function submit() {
    SCounterDialog.deleteDialog();
    sendCounterData();
    if (dialogElementData.isEdit) {
      document
        .querySelector<HTMLDialogElement>(
          `#counterMenu${dialogElementData.id}`
        )!
        .classList.toggle("opacity-0");
    }
  }

  useEffect(() => {
    if (
      !document.querySelector<HTMLDialogElement>(
        "#counterDialog" + dialogElementData.id
      )!.open
    ) {
      const dialog = document.querySelector<HTMLDialogElement>(
        "#counterDialog" + dialogElementData.id
      )!;
      dialog.showModal();
      dialog.classList.toggle("dialog-anim");
    }
  }, []);

  return (
    <dialog
      id={`counterDialog${dialogElementData.id}`}
      className="dialog dialog-anim dialog-padding w-full mx-[20px] md:mx-auto md:max-w-3xl rounded-2xl duration-200"
    >
      <div className="dialog-header">
        <h2 className="title">{dialogElementData.text}</h2>
        <h3 className="subtitle">{dialogElementData.title}</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        {AddInputsArray.map((item: IAddInputsArray) => {
          return (
            <label key={item.id} className="label">
              <span className="text-raleway ml-3">{item.labelText}</span>
              <input
                type={item.type}
                placeholder={item.placeholder}
                defaultValue={item.defValue}
                id={item.htmlId}
                name={item.htmlId}
                className="input"
              />
            </label>
          );
        })}
      </form>
      <button
        onClick={() => {
          submit();
        }}
        aria-label={dialogElementData.buttonText}
        className="button bg-app-100 dark:bg-app-150"
      >
        {dialogElementData.buttonText}
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        aria-label="Закрыть диалоговое окно"
        onClick={() => {
          if (dialogElementData.isEdit) {
            document
              .querySelector<HTMLDivElement>(
                `#counterMenu${dialogElementData.id}`
              )!
              .classList.toggle("opacity-0");
          }

          document
            .querySelector<HTMLDialogElement>(
              `#counterDialog${dialogElementData.id}`
            )!
            .classList.toggle("dialog-anim");

          setTimeout(() => {
            SCounterDialog.deleteDialog();
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
