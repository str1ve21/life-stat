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
      className="flex flex-col justify-between w-max max-w-[45vw] rounded-2xl p-[20px]"
      style={{ background: props.data.color }}
    >
      <div className="flex flex-col justify-between h-full mb-[20px] p-[20px] leading-none bg-white/20 rounded-2xl">
        <h2 className="mb-[10px] text-[3vh] lg:text-[6vh] text-ssp font-bold">
          {props.data.title}
        </h2>
        {props.data.description && (
          <h3 className="mb-[20px] text-[1vh] lg:text-[2vh] text-raleway opacity-80">
            {props.data.description}
          </h3>
        )}
        <p className="text-[6vh] lg:text-[12vh] text-raleway font-light break-words">
          {props.data.counter}
          {props.data.goal !== 0 && (
            <>
              <span className="opacity-80"> из </span>
              {props.data.goal}
            </>
          )}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <input
          type="number"
          defaultValue={props.data.defaultInput ? props.data.defaultInput : 1}
          id={`CounterInput${props.data.id}`}
          className="px-2 py-2 min-h-[50px] bg-white/50 text-raleway rounded-xl"
        />
        <button
          onClick={() => {
            SCounters.changeValue(
              props.data.id,
              +getInputValue(`#CounterInput${props.data.id}`)
            );
          }}
          className="px-8 py-2 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway bg-white/50 rounded-2xl duration-200"
        >
          Добавить
        </button>
      </div>
    </div>
  );
});
export default Counter;
