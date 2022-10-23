import React from "react";

interface IProps {
  id: number;
  color: string;
  textColor: string;
}

export default function CounterMenu(props: IProps) {
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
            document
              .querySelector<HTMLDialogElement>(`#deleteDialog${props.id}`)!
              .showModal();
          }}
          className="font-raleway pb-[10px] border-b-2"
          style={{ borderColor: props.textColor }}
        >
          Удалить
        </button>
        <button
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
