// react, router, mobx
import React, { useEffect, useState } from "react";

// plugins, libs
import { v4 as uuidv4 } from "uuid";

// stores
import SCounters from "../../store/SCounters";
import SCounterDialog from "../../store/SCounterDialog";

// local functions
import { findCounterByID } from "../../func/currentCounter";
import { getInputValue } from "../../func/getInputValue";

// interfaces
import IInputsArray from "../../interfaces/IInputsArray";
import ICounter from "../../interfaces/ICounter";
import ICounterDialog from "../../interfaces/ICounterDialog";

export default function AddDialog() {
  const dialogElementData: ICounterDialog = SCounterDialog.counterDialogData[0];

  const currentCounter: ICounter | undefined = findCounterByID(
    dialogElementData.id
  );

  // info, func, custom
  const [currentSlide, setCurrentSlide] = useState(0);

  const infoInputsArray: IInputsArray[] = [
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
  ];

  const funcInputsArray: IInputsArray[] = [
    {
      id: 0,
      type: "number",
      htmlId: "goalInput",
      labelText: "Цель",
      placeholder: "Станд.: 0",
      defValue: dialogElementData.isEdit ? currentCounter?.goal : "0",
    },
    {
      id: 1,
      type: "number",
      htmlId: "defaultInput",
      labelText: "Стандартное значение ввода",
      placeholder: "Станд.: 1",
      defValue: dialogElementData.isEdit ? currentCounter?.defaultInput : "1",
    },
  ];

  const customInputsArray: IInputsArray[] = [
    {
      id: 0,
      type: "color",
      htmlId: "colorInput",
      labelText: "Цвет фона",
      defValue: dialogElementData.isEdit ? currentCounter?.color : "#FF9B41",
    },
    {
      id: 1,
      type: "color",
      htmlId: "textColorInput",
      labelText: "Цвет текста",
      defValue: dialogElementData.isEdit
        ? currentCounter?.textColor
        : "#000000",
    },
  ];

  let tempItem: ICounter = {
    id: "",
    dateID: 0,
    lastEdit: Date.now(),
    title: "",
    description: "",
    counter: 0,
    goal: 0,
    defaultInput: 0,
    color: "",
    textColor: "",
  };

  function sendCounterData() {
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
  }

  function whatToRender(): IInputsArray[] {
    switch (currentSlide) {
      case 0:
        return infoInputsArray;
      case 1:
        return funcInputsArray;
      case 2:
        return customInputsArray;
    }
    return infoInputsArray;
  }

  useEffect(() => {
    if (
      !document.querySelector<HTMLDialogElement>(
        "#CounterDialog-" + dialogElementData.id
      )!.open
    ) {
      const dialog = document.querySelector<HTMLDialogElement>(
        "#CounterDialog-" + dialogElementData.id
      )!;
      dialog.showModal();
      dialog.classList.toggle("dialog-anim");
    }
  }, []);

  return (
    <dialog
      id={`CounterDialog-${dialogElementData.id}`}
      className="dialog dialog-anim dialog-padding w-full mx-[20px] md:mx-auto md:max-w-3xl rounded-2xl duration-200"
    >
      <div className="dialog-header">
        <h2 className="title">{dialogElementData.text}</h2>
        <h3 className="subtitle"></h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        {whatToRender().map((item: IInputsArray) => {
          return (
            <label key={item.id} className="label">
              <span>{item.labelText}</span>
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
      {currentSlide === 0 && (
        <button
          onClick={() => {
            tempItem.title = getInputValue("#titleInput");
            tempItem.description = getInputValue("#descriptionInput");
            tempItem.counter = +getInputValue("#countInput");
            console.log(tempItem);
            setCurrentSlide((current) => (current = 1));
          }}
          aria-label="Далее"
          className="button bg-app-100 dark:bg-app-150"
        >
          Далее
        </button>
      )}
      {currentSlide === 1 && (
        <div className="flex flex-wrap gap-[10px]">
          <button
            onClick={() => {
              tempItem.goal = +getInputValue("#goalInput");
              tempItem.defaultInput = +getInputValue("#defaultInput");
              console.log(tempItem);
              setCurrentSlide((current) => (current = 2));
            }}
            aria-label="Далее"
            className="button bg-app-100 dark:bg-app-150"
          >
            Далее
          </button>
          <button
            onClick={() => {
              setCurrentSlide((current) => (current = 0));
            }}
            aria-label="Назад"
            className="button bg-app-100 dark:bg-app-150"
          >
            Назад
          </button>
        </div>
      )}
      {currentSlide === 2 && (
        <div className="flex flex-wrap gap-[10px]">
          <button
            onClick={() => {
              tempItem.color = getInputValue("#colorInput");
              tempItem.textColor = getInputValue("#textColorInput");
              console.log(tempItem);
              submit();
            }}
            aria-label={dialogElementData.buttonText}
            className="button bg-app-100 dark:bg-app-150"
          >
            {dialogElementData.buttonText}
          </button>
          <button
            onClick={() => {
              setCurrentSlide((current) => (current = 1));
            }}
            aria-label="Назад"
            className="button bg-app-100 dark:bg-app-150"
          >
            Назад
          </button>
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        aria-label="Закрыть диалоговое окно"
        onClick={() => {
          document
            .querySelector<HTMLDialogElement>(
              `#CounterDialog-${dialogElementData.id}`
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
