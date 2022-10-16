import React from "react";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import { observer } from "mobx-react-lite";
import { getInputValue } from "../../func/getInputValue";

interface IProps {
  data: ICounter;
}

const Counter = observer((props: IProps) => {
  return (
    <div
      id={`Counter ${props.data.id}`}
      className="flex flex-col w-min border-4 rounded-2xl p-[20px]"
      style={{ borderColor: props.data.color }}
    >
      <h2 className="text-[3vh] lg:text-[6vh] text-ssp font-bold">
        {props.data.title}
      </h2>
      {props.data.description && (
        <h3 className="mb-[20px] text-[1vh] lg:text-[2vh] text-raleway opacity-80">
          {props.data.description}
        </h3>
      )}
      <span className="text-[6vh] lg:text-[12vh] text-raleway font-light">
        {props.data.counter}
      </span>
      <div className="flex gap-[20px]">
        <input
          type="number"
          defaultValue={props.data.defaultInput ? props.data.defaultInput : 1}
          id={`CounterInput${props.data.id}`}
          className="px-2 py-2 min-h-[50px] border-4 text-raleway rounded-xl"
          style={{ borderColor: props.data.color }}
        />
        <button
          onClick={() => {
            SCounters.changeValue(
              props.data.id,
              +getInputValue(`#CounterInput${props.data.id}`)
            );
          }}
          className="px-8 py-2 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
          style={{ background: props.data.color }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
});
export default Counter;
