import React from "react";
import Counter from "./Counter";
import SCounters from "../../store/SCounters";
import ICounter from "../../interfaces/ICounter";
import SureDialog from "../allComponents/SureDialog";
import SDialog from "../../store/SDialog";
import { observer } from "mobx-react-lite";
import SInfoDialog from "../../store/SInfoDialog";
import InfoDialog from "../allComponents/InfoDialog";

const Main = observer(() => {
  return (
    <section className="min-h-[50vh] h-max content-padding">
      <div id="counters" className="flex flex-wrap justify-center gap-[20px]">
        {SCounters.countersData.length <= 0 && (
          <div className="text-center text-neutral-400 dark:text-neutral-600">
            <h2 className="hello-title my-[40px]">/ᐠᵕ̩̩̥ ‸ᵕ̩̩̥ ᐟ\</h2>
            <p className="hello-subtitle">{`"Пусто и одиноко тут..." - грустно промяукал котик.`}</p>
          </div>
        )}
        {SCounters.countersData.map((item: ICounter) => {
          return <Counter key={item.id} data={item}></Counter>;
        })}
      </div>
      {SDialog.sureDialogData.length > 0 && <SureDialog></SureDialog>}
      {SInfoDialog.infoDialogData.length > 0 && <InfoDialog></InfoDialog>}
    </section>
  );
});

export default Main;
