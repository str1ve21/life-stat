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
  textColor: string;
  counter: number;
  goal: number;
  donePercent: string;
}

export default function CounterMenu(props: IProps) {
  const inArrayID: number = inArrayIDByID(props.id);

  const deleteDialog: ISureDialog = {
    id: `deleteCounter${props.id}`,
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
      document.querySelector<HTMLDialogElement>("#" + deleteDialog.id)!.close();
      SDialog.deleteDialog();
    },
  };

  const сounterDialog: ICounterDialog = {
    id: props.id,
    text: "Изменеие счётчика.",
    title: `Здесь вы можете изменить ваш счётчик под номером ${inArrayID + 1}.`,
    buttonText: "Изменить",
    isEdit: true,
  };

  const infoDialog: IInfoDialog = {
    id: `infoDialog${props.id}`,
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
      <button
        className="absolute top-0 md:top-[10px] right-[10px] md:right-[20px] w-[30px] md:w-[40px] cursor-pointer z-[100]"
        onClick={() => {
          document
            .querySelector<HTMLDialogElement>(`#counterMenu${props.id}`)!
            .classList.toggle("invisible");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[30px] md:w-[40px] duration-200"
          style={{
            color: props.textColor,
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
      <div
        id={`counterMenu${props.id}`}
        className="invisible absolute flex flex-col top-[30px] md:top-[60px] right-[10px] md:right-[20px] mr-0 px-[20px] py-[10px] border-2 rounded-2xl z-[100]"
        style={{
          background: props.color,
          borderColor: props.textColor,
        }}
      >
        <button
          onClick={() => {
            SDialog.createDialog(deleteDialog);
          }}
          className="font-raleway pb-[10px] border-b-2"
          style={{ borderColor: props.textColor }}
        >
          Удалить
        </button>
        <button
          onClick={() => {
            SCounterDialog.createDialog(сounterDialog);
          }}
          className="font-raleway py-[10px] border-b-2"
          style={{ borderColor: props.textColor }}
        >
          Изменить
        </button>
        <button
          onClick={() => {
            SInfoDialog.createDialog(infoDialog);
          }}
          className="font-raleway pt-[10px]"
        >
          Информация
        </button>
      </div>
    </>
  );
}
