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
      className="flex flex-col justify-between min-w-[320px] w-max counter-padding break-words rounded-[15px] lg:rounded-[30px] duration-[2000ms] transition-colors"
      style={{ background: props.data.color, color: props.data.textColor }}
    >
      <CounterMenu
        id={props.data.id}
        dateID={props.data.dateID}
        lastEdit={props.data.lastEdit}
        color={props.data.color}
        additionalColor={props.data.additionalColor}
        textColor={props.data.textColor}
        counter={props.data.counter}
        goal={props.data.goal}
        donePercent={donePercentFormat}
      ></CounterMenu>
      <div
        className="flex flex-col justify-between h-full counter-padding leading-none rounded-2xl duration-[2000ms] transition-colors"
        style={{ background: props.data.additionalColor }}
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
          className="counter-value mt-[20px] mb-[10px] break-words text-justify duration-[2000ms] transition-colors"
          style={{ color: props.data.textColor }}
        >
          {numeral(props.data.counter).format("0.[000]a")}
          {props.data.goal !== 0 && (
            <>
              <span className="opacity-80"> из </span>
              {numeral(props.data.goal).format("0.[000]a")}
            </>
          )}
        </p>
        {!!props.data.goal && (
          <div
            className="w-full h-[20px] rounded-2xl overflow-hidden duration-[2000ms] transition-colors"
            style={{
              background: props.data.color,
            }}
          >
            <div
              className="h-full overflow-hidden duration-[2000ms] transition-colors"
              style={{
                width:
                  props.data.goal >= props.data.counter
                    ? donePercent > 0
                      ? donePercentFormat
                      : "0%"
                    : "100%",
                background: props.data.textColor,
                transition: "width 200ms ease-in-out",
              }}
            ></div>
          </div>
        )}
      </div>
      <CounterSetValue
        storeCounterID={props.data.id}
        defInput={props.data.defaultInput}
        additionalColor={props.data.additionalColor}
        textColor={props.data.textColor}
      ></CounterSetValue>
    </div>
  );
});
export default Counter;
