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
  accentColor: string;
}

const CounterSetValue = observer((props: IProps) => {
  return (
    <div className="grid grid-cols-2 gap-[10px] md:gap-[20px] mt-[5px] md:mt-[10px]">
      <input
        type="number"
        defaultValue={props.defInput}
        aria-label="Значение для изменения счётчика"
        id={`CounterInput${props.storeCounterID}`}
        className="min-h-[50px] px-2 py-2 text-base md:text-lg border-2 bg-transparent backdrop-invert-[0.15] text-manrope rounded-2xl"
        style={{
          borderColor: props.accentColor,
          transition: "border 2000ms, background 2000ms, color 500ms",
        }}
      />
      <button
        onClick={() => {
          if (+getInputValue(`#CounterInput${props.storeCounterID}`) !== 0) {
            SCounters.changeValue(
              props.storeCounterID,
              +getInputValue(`#CounterInput${props.storeCounterID}`)
            );
          }
        }}
        aria-label="Добавить значение"
        className="p-auto border-2 hover:scale-95 text-base md:text-lg text-manrope backdrop-invert-[0.15] rounded-2xl"
        style={{
          borderColor: props.accentColor,
          transition: "border 2000ms, background 2000ms, transform 200ms",
        }}
      >
        Добавить
      </button>
    </div>
  );
});

export default CounterSetValue;
