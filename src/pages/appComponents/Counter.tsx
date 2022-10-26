import React from "react";
import numeral from "numeral";
import ICounter from "../../interfaces/ICounter";
import CounterSetValue from "./CounterSetValue";
import CounterMenu from "./CounterMenu";
import { observer } from "mobx-react-lite";
import { inArrayIDByID } from "../../func/currentCounter";

interface IProps {
  data: ICounter;
}

const Counter = observer((props: IProps) => {
  const inArrayID: number = inArrayIDByID(props.data.id);

  return (
    <div
      id={`Counter-${props.data.id}`}
      className="flex flex-col justify-between min-w-[280px] w-max counter-padding break-words rounded-2xl"
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
            <h3 className="subtitle m-0">{props.data.description}</h3>
          )}
        </div>
        <p className="counter-value mt-[20px] break-words">
          {numeral(props.data.counter).format("0.[000]a")}
          {props.data.goal !== 0 && (
            <>
              <span className="opacity-80"> из </span>
              {numeral(props.data.goal).format("0.[000]a")}
            </>
          )}
        </p>
        <CounterMenu
          id={props.data.id}
          color={props.data.color}
          textColor={props.data.textColor}
          counter={props.data.counter}
          goal={props.data.goal}
        ></CounterMenu>
      </div>
      <CounterSetValue
        storeCounterID={props.data.id}
        defInput={props.data.defaultInput}
        accentColor={props.data.textColor}
      ></CounterSetValue>
    </div>
  );
});
export default Counter;
