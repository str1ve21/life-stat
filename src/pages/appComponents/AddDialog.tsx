import React from "react";
import SCounters from "../../store/SCounters";
import IAddInputsArray from "../../interfaces/IAddInputsArray";
import ICounter from "../../interfaces/ICounter";
import { getInputValue } from "../../func/getInputValue";

export default function AddDialog() {
  const AddInputsArray: IAddInputsArray[] = [
    {
      id: 0,
      type: "text",
      htmlId: "titleInput",
      labelText: "Заголовок",
      placeholder: "Мой первый счётчик",
      defValue: "Счётчик",
    },
    {
      id: 1,
      type: "number",
      htmlId: "countInput",
      labelText: "Стартовое значение",
      placeholder: "Число, с которого начнётся отсчёт",
      defValue: "0",
    },
    {
      id: 2,
      type: "number",
      htmlId: "defaultInput",
      labelText: "Значение ввода",
      placeholder: "Стандартное число для изменения",
      defValue: "1",
    },
    {
      id: 3,
      type: "color",
      htmlId: "borderColorInput",
      labelText: "Цвет акцента",
      defValue: "#FF9B41",
    },
  ];

  function sendCounterData() {
    const tempItem: ICounter = {
      id: Date.now(),
      title: getInputValue("#titleInput"),
      counter: +getInputValue("#countInput"),
      defaultInput: +getInputValue("#defaultInput"),
      color: getInputValue("#borderColorInput"),
    };
    SCounters.addCounter(tempItem);
  }

  return (
    <dialog
      id="addCounterDialog"
      className="dialog max-w-3xl p-[40px] rounded-2xl"
    >
      <h2 className="text-[3vh] lg:text-[6vh] text-ssp font-bold">
        Добавление счётчика.
      </h2>
      <h3 className="mb-[40px] text-[1vh] lg:text-[2vh] text-raleway opacity-80">
        Здесь вы можете создать новый счётчик со своими параметрами, и
        кастомизировать его.
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mb-[40px] text-[1vh] lg:text-[2vh] line-height-1"
      >
        {AddInputsArray.map((item: IAddInputsArray) => {
          return (
            <label key={item.id} className="flex flex-col gap-[10px] mb-[20px]">
              <span className="text-ssp">{item.labelText}</span>
              <input
                type={item.type}
                placeholder={item.placeholder}
                defaultValue={item.defValue}
                id={item.htmlId}
                name={item.htmlId}
                className="px-2 py-2 w-full min-h-[50px] border-4 text-raleway border-app-100/20 rounded-xl"
              />
            </label>
          );
        })}
      </form>
      <button
        onClick={() => {
          sendCounterData();
          document
            .querySelector<HTMLDialogElement>("#addCounterDialog")!
            .close();
        }}
        className="px-8 py-2 bg-app-100 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
      >
        Создать
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-[20px] right-[20px] w-[40px] cursor-pointer"
        onClick={() => {
          document
            .querySelector<HTMLDialogElement>("#addCounterDialog")!
            .close();
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
