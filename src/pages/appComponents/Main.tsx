import React from "react";
import Counter from "./Counter";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  return (
    <section className="min-h-screen px-[40px] py-[20px]">
      <div id="counters" className="flex flex-wrap justify-center gap-[20px]">
        {SCounters.countersData.map((item: ICounter) => {
          return <Counter key={item.id} data={item}></Counter>;
        })}
      </div>
    </section>
  );
});

export default Main;
