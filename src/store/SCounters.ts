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

    this.countersData[objToChange].lastEdit = Date.now();
    this.countersData[objToChange].counter += inputValue;

    this.fetchPostCounters();
  }

  setStorage(array: ICounter[]) {
    this.countersData = [];
    array.forEach((item) => {
      this.countersData.push(item);
    });
  }

  async fetchGetCounters(isInitial?: boolean) {
    try {
      const response = await fetch(`${serverURL()}/allCounters`, getBody());

      if (response.status !== 200) {
        console.error(
          `[ERROR]: SCounters GET (if). More info: ${response.status}.`
        );
        return response.status;
      }

      console.log(
        `[LOG]: SCounters GET (response). More info: ${response.status}. По кайфу работает.`
      );

      const serverCounters: ICounter[] = await response.json();

      if (isInitial) {
        console.log(`[LOG]: SCounters GET (initial). Started...`);

        const isSynced: boolean =
          localStorage.getItem("All Counters") ===
          JSON.stringify(serverCounters);

        console.log(
          `[LOG]: LocalStorage data: ${localStorage.getItem(
            "All Counters"
          )}\n\n[LOG]: Server data: ${JSON.stringify(serverCounters)}`
        );

        if (!isSynced) {
          console.warn(
            `[WARN]: SCounters GET (sync check). More info: ${isSynced} (isSynced).`
          );
          return "Data conflict";
        }
      }

      if (serverCounters !== null) {
        runInAction(() => {
          this.setStorage(serverCounters);
        });
      }

      this.saveToLocalStorage();

      return response.status;
    } catch (error) {
      console.error(`[ERROR]: SCounters GET (catch). More info: ${error}.`);

      console.warn(
        `[WARN]: SCounters GET (catch). Внимание! Используется локальное хранилище вместо сохранения на сервере. Возможно причина тому отсутствие интернета.`
      );

      this.loadFromLocalStorage();
    }
  }

  async fetchPostCounters() {
    try {
      const JSONStore: string = JSON.stringify(toJS(this.countersData));

      const response = await fetch(
        `${serverURL()}/saveCounters`,
        postCountersBody(JSONStore)
      );

      console.log(
        `[LOG]: SCounters POST (response). More info: ${response.status}. По кайфу работает.`
      );

      this.saveToLocalStorage();
    } catch (error) {
      console.error(`[ERROR]: SCounters POST (catch). More info: ${error}.`);

      console.warn(
        `[WARN]: SCounters POST (catch). Внимание! Используется локальное хранилище вместо сохранения на сервере. Возможно причина тому отсутствие интернета.`
      );

      this.saveToLocalStorage();
    }
  }

  clearLocalStorage() {
    localStorage.removeItem("All Counters");
  }

  saveToLocalStorage() {
    const savedCountersArray = JSON.stringify(toJS(this.countersData));
    localStorage.setItem("All Counters", savedCountersArray);
  }

  loadFromLocalStorage() {
    this.countersData = [];
    const loadedCountersArray: ICounter[] = JSON.parse(
      localStorage.getItem("All Counters")!
    );
    loadedCountersArray.forEach((item) => {
      this.countersData.push(item);
    });
  }
}

export default new counterStore();
