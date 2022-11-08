import { makeAutoObservable, runInAction, toJS } from "mobx";
import ICounter from "../interfaces/ICounter";
import { serverURL, getBody, postCountersBody } from "../func/fetchData";

class counterStore {
  constructor() {
    makeAutoObservable(this);
  }

  countersData: ICounter[] = [];

  clearCounters() {
    this.countersData = [];
  }

  addCounter(newCounterData: ICounter) {
    this.countersData.push(newCounterData);
    this.fetchPostCounters();
  }

  editCounter(editedCounter: ICounter) {
    const counterToEdit = toJS(this.countersData).findIndex(
      (obj) => obj.id === editedCounter.id
    );
    this.countersData.splice(counterToEdit, 1, editedCounter);
    this.fetchPostCounters();
  }

  removeCounter(id: string) {
    const idToRemove = toJS(this.countersData).findIndex(
      (obj) => obj.id === id
    );
    this.countersData.splice(idToRemove, 1);
    this.fetchPostCounters();
  }

  changeValue(elem: string, inputValue: number) {
    const objToChange = toJS(this.countersData).findIndex(
      (obj) => obj.id === elem
    );
    this.countersData[objToChange].counter += inputValue;
    this.fetchPostCounters();
  }

  async fetchGetCounters() {
    try {
      const response = await fetch(`${serverURL()}/allCounters`, getBody());
      if (response.status === 401 || response.status === 404) {
        console.error(
          `[ERROR]: While SCounters GET (response). More info: ${response.status}`
        );
        return response.status;
      }
      const serverCounters: ICounter[] = await response.json();
      if (serverCounters !== null) {
        runInAction(() => {
          this.countersData = [];
          serverCounters.forEach((item) => {
            this.countersData.push(item);
          });
        });
      }
    } catch (error) {
      console.error(
        `[ERROR]: While SCounters GET (catch). More info: ${error}`
      );
    }
  }

  async fetchPostCounters() {
    try {
      const JSONStore: string = JSON.stringify(toJS(this.countersData));
      await fetch(`${serverURL()}/saveCounters`, postCountersBody(JSONStore));
    } catch (error) {
      console.error(
        `[ERROR]: While SCounters POST (catch). More info: ${error}`
      );
    }
  }

  // До лучших времён...

  // saveToLocalStorage() {
  //   const savedCountersArray = JSON.stringify(toJS(this.countersData));
  //   localStorage.setItem("All Counters", savedCountersArray);
  // }

  // loadFromLocalStorage() {
  //   if (toJS(this.countersData).length !== 0) return;
  //   const loadedCountersArray: ICounter[] = JSON.parse(
  //     localStorage.getItem("All Counters")!
  //   );
  //   loadedCountersArray.forEach((item) => {
  //     this.countersData.push(item);
  //   });
  // }
}

export default new counterStore();
