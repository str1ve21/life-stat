import React from "react";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import { observer } from "mobx-react-lite";

interface IProps {
  data: ICounter;
}

const Counter = observer((props: IProps) => {
  return (
    <div className="flex flex-col border-4 border-app-100 rounded-2xl p-[20px]">
      <h2 className="text-[2vh] lg:text-[4vh] text-ssp font-bold text-center">
        {props.data.title}
      </h2>
      <span className="text-[6vh] lg:text-[12vh] text-raleway font-light text-center">
        {props.data.counter}
      </span>
      <div className="flex gap-[20px]">
        <input
          type="number"
          defaultValue="1"
          id={`Input${props.data.id}`}
          className="w-1/2 px-2 py-2 border-4 border-app-100 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
        />
        <button
          onClick={() => {
            SCounters.changeValue(props.data.id);
          }}
          className="w-1/2 px-8 py-2 bg-app-100 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
});
export default Counter;
