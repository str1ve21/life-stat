import React from "react";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import { observer } from "mobx-react-lite";

interface IProps {
  data: ICounter;
}

const Counter = observer((props: IProps) => {
  return (
    <div
      id={`Counter ${props.data.id}`}
      className="flex flex-col border-4 border-app-100 rounded-2xl p-[20px]"
      style={props.data.color ? { borderColor: props.data.color } : {}}
    >
      <h2 className="text-[2vh] lg:text-[4vh] text-ssp font-bold text-center">
        {props.data.title}
      </h2>
      <span className="text-[6vh] lg:text-[12vh] text-raleway font-light text-center">
        {props.data.counter}
      </span>
      <div className="flex gap-[20px]">
        <input
          type="number"
          defaultValue={props.data.defaultInput ? props.data.defaultInput : 1}
          id={`CounterInput${props.data.id}`}
          className="w-1/2 px-2 py-2 text-[1vh] lg:text-[2vh] text-raleway border-b-4 border-l-4 text-raleway border-app-100 rounded-bl-xl"
          style={props.data.color ? { borderColor: props.data.color } : {}}
        />
        <button
          onClick={() => {
            SCounters.changeValue(props.data.id);
          }}
          className="w-1/2 px-8 py-2 bg-app-100 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
          style={props.data.color ? { background: props.data.color } : {}}
        >
          Add
        </button>
      </div>
    </div>
  );
});
export default Counter;
