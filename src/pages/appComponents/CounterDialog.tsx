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
import { sliderAnimation } from "../../func/formSlider";

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
  ];

  const customInputsArray: IInputsArray[] = [
    {
      id: 5,
      type: "color",
      htmlId: "colorInput",
      labelText: "Цвет фона",
      defValue: dialogElementData.isEdit ? currentCounter?.color : "#FF9B41",
    },
    {
      id: 6,
      type: "color",
      htmlId: "additionalColorInput",
      labelText: "Второстепенный цвет",
      defValue: dialogElementData.isEdit
        ? currentCounter?.additionalColor
        : "#F4AE71",
    },
    {
      id: 7,
      type: "color",
      htmlId: "textColorInput",
      labelText: "Цвет текста",
      defValue: dialogElementData.isEdit
        ? currentCounter?.textColor
        : "#000000",
    },
  ];

  const inputsArray = [
    { id: 0, array: infoInputsArray },
    { id: 1, array: funcInputsArray },
    { id: 2, array: customInputsArray },
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
      color: getInputValue("#colorInput"),
      additionalColor: getInputValue("#additionalColorInput"),
      textColor: getInputValue("#textColorInput"),
    };

    if (currentCounter && dialogElementData.isEdit) {
      tempItem.id = currentCounter.id;
      tempItem.dateID = currentCounter.dateID;
      SCounters.editCounter(tempItem);
      document.querySelector<HTMLInputElement>(
        `#CounterInput-${currentCounter.id}`
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

  function subtitleText(slide: number): string {
    switch (slide) {
      case 0:
        return "Здесь вы можете добавить основную информацию. Можете оставить поля заголовка и описания пустыми, тогда будет только номер счётчика.";
      case 1:
        return "Функциональность счётчика даст вам более гибкую и удобную работу с ним. В будущем, тут будут более интересные пункты.";
      case 2:
        return "Данный раздел позволит вам касотимизровать ваш счётчик. После создания вы можете отредактировать любой из пунктов.";
    }
    return "";
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
      dialog.classList.toggle("anim-y");
    }
  }, []);

  return (
    <dialog
      id={`CounterDialog-${dialogElementData.id}`}
      className="dialog anim-y dialog-padding w-full mx-[20px] md:mx-auto md:max-w-3xl rounded-2xl duration-200"
    >
      <div className="dialog-header">
        <h2 className="title">{dialogElementData.text}</h2>
        <p className="subtitle">{subtitleText(currentSlide)}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        id="inputsParent"
      >
        {inputsArray.map((inputs) => {
          return (
            <div
              key={inputs.id}
              id={`inputsArray-${inputs.id}`}
              className={`${
                currentSlide === inputs.id ? "" : "hidden"
              } form w-full`}
            >
              {inputs.array.map((input) => {
                return (
                  <label key={input.id} className="label">
                    <span>{input.labelText}</span>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      defaultValue={input.defValue}
                      id={input.htmlId}
                      name={input.htmlId}
                      className="input"
                    />
                  </label>
                );
              })}
            </div>
          );
        })}
      </form>
      <div className="flex flex-wrap gap-[10px]">
        <button
          onClick={() => {
            if (currentSlide !== 2) {
              console.log(currentSlide);
              setCurrentSlide(currentSlide + 1);
              // sliderAnimation("#inputsParent", currentSlide);
              return;
            }
            submit();
          }}
          aria-label={
            currentSlide === 2 ? dialogElementData.buttonText : "Далее"
          }
          className="button bg-app-100 dark:bg-app-150"
        >
          {currentSlide === 2 ? dialogElementData.buttonText : "Далее"}
        </button>
        <button
          onClick={() => {
            setCurrentSlide(currentSlide - 1);
            // sliderAnimation("#inputsParent", currentSlide);
          }}
          aria-label="Назад"
          className="button bg-app-100 dark:bg-app-150"
          disabled={currentSlide === 0 ? true : false}
        >
          Назад
        </button>
      </div>
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
            .classList.toggle("anim-y");

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
