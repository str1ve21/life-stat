import React from "react";
import { observer } from "mobx-react-lite";
import SCounters from "../../store/SCounters";
import { getInputValue } from "../../func/getInputValue";

interface IProps {
  storeCounterID: number;
  defInput: number;
}

const CounterSetValue = observer((props: IProps) => {
  return (
    <div className="grid grid-cols-2 gap-[20px]">
      <input
        type="number"
        defaultValue={props.defInput ? props.defInput : 1}
        id={`CounterInput${props.storeCounterID}`}
        className="px-2 py-2 min-h-[50px] bg-transparent backdrop-invert-[0.15] text-raleway rounded-xl"
      />
      <button
        onClick={() => {
          SCounters.changeValue(
            props.storeCounterID,
            +getInputValue(`#CounterInput${props.storeCounterID}`)
          );
        }}
        className="px-8 py-2 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway backdrop-invert-[0.15] rounded-2xl duration-200"
      >
        Добавить
      </button>
    </div>
  );
});

export default CounterSetValue;
