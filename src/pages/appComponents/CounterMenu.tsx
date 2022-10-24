import React from "react";
import ISureDialog from "../../interfaces/ISureDialog";
import SCounters from "../../store/SCounters";
import SDialog from "../../store/SDialog";
import SCounterDialog from "../../store/SCounterDialog";
import ICounterDialog from "../../interfaces/ICounterDialog";
import { inArrayIDByID } from "../../func/currentCounter";

interface IProps {
  id: number;
  color: string;
  textColor: string;
}

export default function CounterMenu(props: IProps) {
  const inArrayID: number = inArrayIDByID(props.id);

  const deleteDialog: ISureDialog = {
    id: `deleteDialog${props.id}`,
    title: `Удаление счётчика.`,
    text: `Вы уверены, что хотите удалить счётчик с номером ${
      inArrayID + 1
    } навсегда?`,
    yesText: "Удалить",
    noText: "Закрыть",
    yesFunction: () => {
      SCounters.removeCounter(props.id);
      SDialog.deleteDialog();
    },
    noFunction: () => {
      document
        .querySelector<HTMLDialogElement>(`#deleteDialog${props.id}`)!
        .close();
      SDialog.deleteDialog();
    },
  };
  const createCounterDialog: ICounterDialog = {
    id: props.id,
    text: "Изменеие счётчика.",
    title: "Здесь вы можете изменить ваш счётчик.",
    buttonText: "Изменить",
    isEdit: true,
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-0 md:top-[10px] right-[10px] md:right-[20px] w-[30px] md:w-[40px] cursor-pointer z-[100]"
        onClick={() => {
          document
            .querySelector<HTMLDialogElement>(`#counterMenu${props.id}`)!
            .classList.toggle("invisible");
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
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
            SCounterDialog.createDialog(createCounterDialog);
          }}
          className="font-raleway py-[10px] border-b-2"
          style={{ borderColor: props.textColor }}
        >
          Изменить
        </button>
        <button className="font-raleway pt-[10px]">Информация</button>
      </div>
    </>
  );
}
