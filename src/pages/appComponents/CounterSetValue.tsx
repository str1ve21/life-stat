// react, router, mobx
import React from "react";
import { observer } from "mobx-react-lite";

// stores
import SCounters from "../../store/SCounters";

// local functions
import { getInputValue } from "../../func/getInputValue";

// interfaces
interface IProps {
  storeCounterID: string;
  defInput: number;
  textColor: string;
}

const CounterSetValue = observer((props: IProps) => {
  return (
    <div className="flex gap-[10px] md:gap-[20px] mt-[10px] md:mt-[20px]">
      <div className="grid grid-cols-2">
        <input
          type="number"
          defaultValue={props.defInput}
          aria-label="Значение для изменения счётчика"
          id={`CounterInput-${props.storeCounterID}`}
          className="px-[10px] py-[10px] text-base md:text-lg text-manrope bg-white border-r-2 rounded-2xl rounded-r-none"
          style={{
            borderColor: props.textColor,
            transition: "background 2000ms, color 500ms",
          }}
        />
        <button
          onClick={() => {
            if (+getInputValue(`#CounterInput-${props.storeCounterID}`) !== 0) {
              SCounters.changeValue(
                props.storeCounterID,
                +getInputValue(`#CounterInput-${props.storeCounterID}`)
              );
            }
          }}
          aria-label="Добавить значение"
          className="button h-full w-full bg-white hover:scale-100 hover:opacity-90 rounded-2xl rounded-l-none"
          style={{
            borderColor: props.textColor,
            transition: "background 2000ms, opacity 200ms",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px] mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});

export default CounterSetValue;
