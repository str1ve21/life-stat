import React from "react";
import { observer } from "mobx-react-lite";
import SCounters from "../../store/SCounters";
import { getInputValue } from "../../func/getInputValue";

interface IProps {
  storeCounterID: number;
  defInput: number;
  accentColor: string;
}

const CounterSetValue = observer((props: IProps) => {
  return (
    <div className="grid grid-cols-2 gap-[10px] md:gap-[20px]">
      <input
        type="number"
        defaultValue={props.defInput ? props.defInput : 1}
        id={`CounterInput${props.storeCounterID}`}
        className="min-h-[50px] px-2 py-2 text-lg border-2 bg-transparent backdrop-invert-[0.15] text-raleway rounded-xl"
        style={{ borderColor: props.accentColor }}
      />
      <button
        onClick={() => {
          SCounters.changeValue(
            props.storeCounterID,
            +getInputValue(`#CounterInput${props.storeCounterID}`)
          );
        }}
        className="p-auto border-2 hover:scale-95 text-lg text-raleway backdrop-invert-[0.15] rounded-2xl duration-200"
        style={{ borderColor: props.accentColor }}
      >
        Добавить
      </button>
    </div>
  );
});

export default CounterSetValue;
