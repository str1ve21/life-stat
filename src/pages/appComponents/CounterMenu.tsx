// react, router, mobx
import React from "react";

// plugins, libs
import numeral from "numeral";

// stores
import SCounters from "../../store/SCounters";
import SDialog from "../../store/SDialog";
import SCounterDialog from "../../store/SCounterDialog";
import SInfoDialog from "../../store/SInfoDialog";

// local functions
import { inArrayIDByID } from "../../func/currentCounter";

// interfaces
import ISureDialog from "../../interfaces/ISureDialog";
import ICounterDialog from "../../interfaces/ICounterDialog";
import IInfoDialog from "../../interfaces/IInfoDialog";

interface IProps {
  id: string;
  dateID: number;
  lastEdit: number;
  color: string;
  additionalColor: string;
  textColor: string;
  counter: number;
  goal: number;
  donePercent: string;
}

export default function CounterMenu(props: IProps) {
  const inArrayID: number = inArrayIDByID(props.id);

  const deleteDialog: ISureDialog = {
    id: props.id,
    title: `Удаление счётчика.`,
    text: `Вы уверены, что хотите удалить счётчик с номером ${
      inArrayID + 1
    } навсегда?`,
    yesText: "Удалить",
    noText: "Закрыть",
    isYesFunc: true,
    isNoFunc: true,
    canClose: true,
    yesFunction: () => {
      SCounters.removeCounter(props.id);
      SDialog.deleteDialog();
    },
    noFunction: () => {
      document
        .querySelector<HTMLDialogElement>("#SureDialog-" + deleteDialog.id)!
        .close();
      SDialog.deleteDialog();
    },
  };

  const сounterDialog: ICounterDialog = {
    id: props.id,
    text: "Изменеие счётчика.",
    buttonText: "Изменить",
    isEdit: true,
  };

  const infoDialog: IInfoDialog = {
    id: props.id,
    dateID: props.dateID,
    title: "Информация о счётчике.",
    description: "Здесь будет некоторая информация о вашем счётчике.",
    text: [
      `Полное значение счётчика: ${numeral(props.counter).format("0.[000]")}`,
      props.goal !== 0
        ? `Полная цель: ${numeral(props.goal).format("0.[000]")}`
        : `Полная цель: Отсутсвует цель`,
      props.goal !== 0
        ? `Прогресс: ${props.donePercent}`
        : `Прогресс: Отсутсвует цель`,
      `Последнее изменение: ${new Date(
        props.lastEdit
      ).toLocaleDateString()}, ${new Date(props.lastEdit).toTimeString()}`,
      `Дата создания: ${new Date(
        props.dateID
      ).toLocaleDateString()}, ${new Date(props.dateID).toTimeString()}`,
    ],
  };

  return (
    <>
      <div
        id={`CounterMenu-${props.id}`}
        className="flex gap-[10px] lg:gap-[20px] mb-[10px] lg:mb-[20px] rounded-2xl z-[100] duration-200"
      >
        <button
          onClick={() => {
            alert("В разработке");
          }}
          aria-label="Сдвинуть счётчик левее"
          className="button-sm"
          style={{
            background: props.additionalColor,
            transition: "background 2000ms, color 500ms",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            alert("В разработке");
          }}
          aria-label="Сдвинуть счётчик правее"
          className="button-sm"
          style={{
            background: props.additionalColor,
            transition: "background 2000ms, color 500ms",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            SDialog.createDialog(deleteDialog);
          }}
          aria-label="Удалить счётчик"
          className="button-sm"
          style={{
            background: props.additionalColor,
            transition: "background 2000ms, color 500ms",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            SCounterDialog.createDialog(сounterDialog);
          }}
          aria-label="Изменить счётчик"
          className="button-sm"
          style={{
            background: props.additionalColor,
            transition: "background 2000ms, color 500ms",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            SInfoDialog.createDialog(infoDialog);
          }}
          aria-label="Информация о счётчике"
          className="button-sm"
          style={{
            background: props.additionalColor,
            transition: "background 2000ms, color 500ms",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
