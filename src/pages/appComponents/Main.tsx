import React from "react";
import Counter from "./Counter";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import SureDialog from "../allComponents/SureDialog";
import SDialog from "../../store/SDialog";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  return (
    <section className="min-h-screen content-padding">
      <div id="counters" className="flex flex-wrap justify-center gap-[20px]">
        {SCounters.countersData.map((item: ICounter) => {
          return <Counter key={item.id} data={item}></Counter>;
        })}
      </div>
      {SDialog.sureDialogData.length > 0 && <SureDialog></SureDialog>}
    </section>
  );
});

export default Main;
