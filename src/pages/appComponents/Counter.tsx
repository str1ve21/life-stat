import React from "react";
import ICounter from "../../interfaces/ICounter";

interface IProps {
  data: ICounter;
}

export default function Counter(props: IProps) {
  return (
    <div className="flex flex-col border-4 border-app-100 rounded-2xl p-[20px]">
      <h2 className="text-[2vh] lg:text-[4vh] text-ssp font-bold text-center">
        {props.data.title}
      </h2>
      <span className="text-[6vh] lg:text-[12vh] text-raleway font-light text-center">
        {props.data.counter}
      </span>
    </div>
  );
}
