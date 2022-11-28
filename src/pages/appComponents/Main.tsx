// react, router, mobx
import React from "react";
import { observer } from "mobx-react-lite";

// stores
import SDialog from "../../store/SDialog";
import SCounters from "../../store/SCounters";
import SInfoDialog from "../../store/SInfoDialog";

// interfaces
import ICounter from "../../interfaces/ICounter";

// components
import Counter from "./Counter";
import SureDialog from "../allComponents/SureDialog";
import InfoDialog from "../allComponents/InfoDialog";

const Main = observer(() => {
  return (
    <section className="min-h-[75vh] h-max content-padding">
      <div id="counters" className="flex flex-wrap justify-center gap-[20px]">
        {SCounters.countersData.length <= 0 && (
          <div className="text-center">
            <h2 className="hello-title my-[40px] text-neutral-400 dark:text-neutral-600">
              /ᐠᵕ̩ ‸ᵕ̩ ᐟ\
            </h2>
            <p className="hello-subtitle text-neutral-400 dark:text-neutral-600">{`"Пусто и одиноко тут..." - грустно промяукал котик.`}</p>
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
