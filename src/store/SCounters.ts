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

  addCounter(title: string, count: number) {
    const tempItem: ICounter = {
      id: this.countersData.length,
      title: title,
      counter: count,
    };
    this.countersData.push(tempItem);
  }

  changeValue(elem: number) {
    this.countersData[elem].counter +=
      +document.querySelector<HTMLInputElement>(`#Input${elem}`)!.value;
  }
}

export default new counterStore();
