import React from "react";
import Counter from "./Counter";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  return (
    <section className="min-h-screen content-padding">
      <div
        id="counters"
        className="grid place-content-center grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-[20px]"
      >
        {SCounters.countersData.map((item: ICounter) => {
          return <Counter key={item.id} data={item}></Counter>;
        })}
      </div>
    </section>
  );
});

export default Main;
