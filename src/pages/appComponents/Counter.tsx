// react, router, mobx
import React from "react";
import { observer } from "mobx-react-lite";

// plugins, libs
import numeral from "numeral";

// local functions
import { inArrayIDByID } from "../../func/currentCounter";

// interfaces
import ICounter from "../../interfaces/ICounter";

// components
import CounterSetValue from "./CounterSetValue";
import CounterMenu from "./CounterMenu";

interface IProps {
  data: ICounter;
}

const Counter = observer((props: IProps) => {
  const inArrayID: number = inArrayIDByID(props.data.id);

  const donePercent: number = props.data.counter / props.data.goal;

  const donePercentFormat: string = numeral(donePercent).format("0.[000]%");

  return (
    <div
      id={`Counter-${props.data.id}`}
      className="flex flex-col justify-between min-w-[280px] w-max counter-padding break-words rounded-2xl duration-[2000ms] transition-colors"
      style={{ background: props.data.color, color: props.data.textColor }}
    >
      <div
        className="flex flex-col justify-between h-full counter-padding pr-[40px] md:pr-[80px] mb-[5px] md:mb-[10px] border-2 leading-none backdrop-invert-[0.075] rounded-2xl duration-[2000ms] transition-colors"
        style={{ borderColor: props.data.textColor }}
      >
        <div>
          <h2
            className="title duration-[2000ms] transition-colors"
            style={{ color: props.data.textColor }}
          >
            {inArrayID + 1}. {props.data.title}
          </h2>
          {props.data.description && (
            <p
              className="subtitle m-0 duration-[2000ms] transition-colors"
              style={{ color: props.data.textColor }}
            >
              {props.data.description}
            </p>
          )}
        </div>
        <p
          className="counter-value mt-[20px] break-words text-justify"
          style={{ color: props.data.textColor, transition: "color 2000ms" }}
        >
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
          dateID={props.data.dateID}
          lastEdit={props.data.lastEdit}
          color={props.data.color}
          textColor={props.data.textColor}
          counter={props.data.counter}
          goal={props.data.goal}
          donePercent={donePercentFormat}
        ></CounterMenu>
      </div>
      {!!props.data.goal && (
        <div
          className="w-full h-[40px] my-[5px] md:my-0 border-2 backdrop-invert-[0.075] rounded-2xl overflow-hidden duration-[2000ms] transition-colors"
          style={{ borderColor: props.data.textColor }}
        >
          <div
            className="h-full opacity-75 overflow-hidden"
            style={{
              width:
                props.data.goal >= props.data.counter
                  ? donePercent > 0
                    ? donePercentFormat
                    : "0%"
                  : "100%",
              background: props.data.textColor,
              transition: "width 200ms ease-in-out, background 2000ms",
            }}
          ></div>
        </div>
      )}
      <CounterSetValue
        storeCounterID={props.data.id}
        defInput={props.data.defaultInput}
        accentColor={props.data.textColor}
      ></CounterSetValue>
    </div>
  );
});
export default Counter;
