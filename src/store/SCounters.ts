import { makeAutoObservable, toJS } from "mobx";
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
      color: "#FF9B41",
    },
  ];

  addCounter(newCounterData: ICounter) {
    this.countersData.push(newCounterData);
  }

  changeValue(elem: number, inputValue: number) {
    const objToChange = toJS(this.countersData).findIndex(
      (obj) => obj.id === elem
    );
    this.countersData[objToChange].counter += inputValue;
  }
}

export default new counterStore();
