import { makeAutoObservable, toJS } from "mobx";
import ICounter from "../interfaces/ICounter";

class counterStore {
  constructor() {
    makeAutoObservable(this);
  }

  countersData: ICounter[] = [];

  addCounter(newCounterData: ICounter) {
    this.countersData.push(newCounterData);
    this.saveToLocalStorage();
  }

  editCounter(editedCounter: ICounter) {
    const counterToEdit = toJS(this.countersData).findIndex(
      (obj) => obj.id === editedCounter.id
    );
    this.countersData.splice(counterToEdit, 1, editedCounter);
  }

  removeCounter(id: number) {
    const idToRemove = toJS(this.countersData).findIndex(
      (obj) => obj.id === id
    );
    this.countersData.splice(idToRemove, 1);
    this.saveToLocalStorage();
  }

  changeValue(elem: number, inputValue: number) {
    const objToChange = toJS(this.countersData).findIndex(
      (obj) => obj.id === elem
    );
    this.countersData[objToChange].counter += inputValue;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const savedCountersArray = JSON.stringify(toJS(this.countersData));
    localStorage.setItem("All Counters", savedCountersArray);
  }

  loadFromLocalStorage() {
    if (toJS(this.countersData).length !== 0) return;
    const loadedCountersArray: [] = JSON.parse(
      localStorage.getItem("All Counters")!
    );
    loadedCountersArray.forEach((item) => {
      this.countersData.push(item);
    });
  }
}

export default new counterStore();
