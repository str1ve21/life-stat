import React from "react";
import SCounters from "../../store/SCounters";
import IAddInputsArray from "../../interfaces/IAddInputsArray";
import ICounter from "../../interfaces/ICounter";
import ICounterDialog from "../../interfaces/ICounterDialog";
import SCounterDialog from "../../store/SCounterDialog";
import { getInputValue } from "../../func/getInputValue";
import { toJS } from "mobx";

export default function AddDialog() {
  const dialogElementData: ICounterDialog = SCounterDialog.counterDialogData[0];
  const counters: ICounter[] = toJS(SCounters.countersData);
  const currentCounter: ICounter | undefined = counters.find(
    (obj) => obj.id === dialogElementData.id
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
      labelText: "Стартовое значение",
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
      labelText: "Значение ввода",
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
      id: 0,
      title: getInputValue("#titleInput"),
      description: getInputValue("#descriptionInput"),
      counter: +getInputValue("#countInput"),
      goal: +getInputValue("#goalInput"),
      defaultInput: +getInputValue("#defaultInput"),
      color: getInputValue("#borderColorInput"),
      textColor: getInputValue("#textColorInput"),
    };
    if (dialogElementData.isEdit) {
      tempItem.id = dialogElementData.id;
      SCounters.editCounter(tempItem);
      return;
    }
    tempItem.id = Date.now();
    SCounters.addCounter(tempItem);
  }

  return (
    <dialog
      id={`counterDialog${dialogElementData.id}`}
      className="dialog mx-[20px] md:mx-auto md:max-w-2xl dialog-padding rounded-2xl"
    >
      <h2 className="title">{dialogElementData.text}</h2>
      <h3 className="subtitle">{dialogElementData.title}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        {AddInputsArray.map((item: IAddInputsArray) => {
          return (
            <label key={item.id} className="label">
              <span className="text-ssp">{item.labelText}</span>
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
          SCounterDialog.deleteDialog();
          sendCounterData();
        }}
        className="button bg-app-100"
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
        onClick={() => {
          SCounterDialog.deleteDialog();
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