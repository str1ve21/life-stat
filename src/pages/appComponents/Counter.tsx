import React from "react";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import CounterSetValue from "./CounterSetValue";
import CounterMenu from "./CounterMenu";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

interface IProps {
  data: ICounter;
}

const Counter = observer((props: IProps) => {
  const storeAsArray: ICounter[] = toJS(SCounters.countersData);
  const inArrayID: number = storeAsArray.findIndex(
    (obj) => obj.id === props.data.id
  );

  return (
    <div
      id={`Counter-${props.data.id}`}
      className="flex flex-col justify-between min-w-[280px] max-w-[40vw] counter-padding break-words rounded-2xl"
      style={{ background: props.data.color, color: props.data.textColor }}
    >
      <div
        className="flex flex-col justify-between h-full mb-[10px] md:mb-[20px] counter-padding pr-[40px] md:pr-[80px] border-2 leading-none backdrop-invert-[0.075] rounded-2xl"
        style={{ borderColor: props.data.textColor }}
      >
        <div>
          <h2 className="title">
            {inArrayID + 1}. {props.data.title}
          </h2>
          {props.data.description && (
            <h3 className="subtitle">{props.data.description}</h3>
          )}
        </div>
        <p className="counter-value break-all">
          {props.data.counter}
          {props.data.goal !== 0 && (
            <>
              <span className="opacity-80"> из </span>
              {props.data.goal}
            </>
          )}
        </p>
        <CounterMenu
          id={storeAsArray[inArrayID].id}
          color={storeAsArray[inArrayID].color}
          textColor={storeAsArray[inArrayID].textColor}
        ></CounterMenu>
      </div>
      <CounterSetValue
        storeCounterID={storeAsArray[inArrayID].id}
        defInput={storeAsArray[inArrayID].defaultInput}
        accentColor={storeAsArray[inArrayID].textColor}
      ></CounterSetValue>
    </div>
  );
});
export default Counter;
