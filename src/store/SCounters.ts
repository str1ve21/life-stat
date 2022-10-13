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
      id: 0,
      title: "test 2",
      counter: 1,
    },
  ];
}

export default new counterStore();
