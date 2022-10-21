import React from "react";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import ISureDialog from "../../interfaces/ISureDialog";
import SureDialog from "../allComponents/SureDialog";
import CounterSetValue from "./CounterSetValue";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

interface IProps {
  data: ICounter;
}

const Counter = observer((props: IProps) => {
  const storeAsArray: ICounter[] = toJS(SCounters.countersData);
  const inArrayID: number = storeAsArray.findIndex(
    (obj) => obj.id === props.data.id
  );
  const sureDialog: ISureDialog = {
    counterID: props.data.id,
    title: `Удаление счётчика.`,
    text: `Вы уверены, что хотите удалить счётчик с номером ${
      inArrayID + 1
    } навсегда?`,
    yesText: "Удалить",
    noText: "Закрыть",
    yesFunction: () => {
      SCounters.removeCounter(props.data.id);
    },
    noFunction: () => {
      document
        .querySelector<HTMLDialogElement>(`#sureDialog${props.data.id}`)!
        .close();
    },
  };

  return (
    <>
      <SureDialog data={sureDialog}></SureDialog>
      <div
        id={`Counter${props.data.id}`}
        className="flex flex-col justify-between w-max max-w-[45vw] rounded-2xl p-[20px] break-words"
        style={{ background: props.data.color, color: props.data.textColor }}
      >
        <div className="flex flex-col justify-between h-full mb-[20px] p-[20px] pr-[80px] leading-none backdrop-invert-[0.075] rounded-2xl">
          <div>
            <h2 className="mb-[10px] text-[3vh] lg:text-[6vh] text-ssp font-bold">
              {inArrayID + 1}. {props.data.title}
            </h2>
            {props.data.description && (
              <h3 className="mb-[20px] text-[1vh] lg:text-[2vh] text-raleway opacity-80">
                {props.data.description}
              </h3>
            )}
          </div>
          <p className="text-[6vh] lg:text-[12vh] text-raleway font-light">
            {props.data.counter}
            {props.data.goal !== 0 && (
              <>
                <span className="opacity-80"> из </span>
                {props.data.goal}
              </>
            )}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute top-[10px] right-[20px] w-[40px] cursor-pointer z-[100]"
            onClick={() => {
              document
                .querySelector<HTMLDialogElement>(
                  `#counterMenu${props.data.id}`
                )!
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
            id={`counterMenu${props.data.id}`}
            className="invisible absolute flex flex-col top-[60px] right-[20px] mr-0 p-[20px] bg-neutral-200 rounded-2xl z-[100]"
          >
            <button
              onClick={() => {
                document
                  .querySelector<HTMLDialogElement>(
                    `#sureDialog${props.data.id}`
                  )!
                  .showModal();
              }}
              className="font-raleway pb-[10px] border-b-2 border-neutral-300"
            >
              Удалить
            </button>
            <button className="font-raleway py-[10px] border-b-2 border-neutral-300">
              Изменить
            </button>
            <button className="font-raleway pt-[10px]">Информация</button>
          </div>
        </div>
        <CounterSetValue
          storeCounterID={props.data.id}
          defInput={props.data.defaultInput}
        ></CounterSetValue>
      </div>
    </>
  );
});
export default Counter;
