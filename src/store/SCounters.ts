import { makeAutoObservable } from "mobx";
import ICounter from "../interfaces/ICounter";

class counterStore {
  constructor() {
    makeAutoObservable(this);
  }

  countersData: ICounter[] = [
    {
      id: 0,
      title: "test",
      counter: 0,
    },
    {
      id: 1,
      title: "test 2",
      counter: 1,
    },
  ];

  addCounter(newCounterData: ICounter) {
    this.countersData.push(newCounterData);
  }

  changeValue(elem: number) {
    this.countersData[elem].counter +=
      +document.querySelector<HTMLInputElement>(`#CounterInput${elem}`)!.value;
  }
}

export default new counterStore();
