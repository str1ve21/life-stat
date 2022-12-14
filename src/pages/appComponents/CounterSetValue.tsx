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
  additionalColor: string;
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
          className="px-[15px] py-[10px] text-base md:text-lg text-manrope border-r-2 rounded-full rounded-r-none"
          style={{
            borderColor: props.textColor,
            background: props.additionalColor,
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
          className="button h-full w-full hover:scale-100 hover:opacity-90 rounded-full rounded-l-none"
          style={{
            background: props.additionalColor,
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
