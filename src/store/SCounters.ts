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
      if (response.status !== 200) {
        console.error(
          `[ERROR]: While SCounters GET (response). More info: ${response.status}`
        );
        return response.status;
      }
      console.log(`GET status: ${response.status}. По кайфу работает.`);
      const serverCounters: ICounter[] = await response.json();
      if (serverCounters !== null) {
        runInAction(() => {
          this.countersData = [];
          serverCounters.forEach((item) => {
            this.countersData.push(item);
          });
        });
      }
      return response.status;
    } catch (error) {
      console.error(
        `[ERROR]: While SCounters GET (catch). More info: ${error}.`
      );
      this.loadFromLocalStorage();
      console.warn(
        "%cВнимание! Используется локальное хранилище вместо сохранения на сервере. Возможно причина тому отсутствие интернета.",
        "font-family: monospace; font-size: 20px; padding: 20px;"
      );
    }
  }

  async fetchPostCounters() {
    try {
      const JSONStore: string = JSON.stringify(toJS(this.countersData));
      const response = await fetch(
        `${serverURL()}/saveCounters`,
        postCountersBody(JSONStore)
      );
      console.log(`POST status: ${response.status}. По кайфу работает.`);
    } catch (error) {
      console.error(
        `[ERROR]: While SCounters POST (catch). More info: ${error}.`
      );
      this.saveToLocalStorage();
      console.warn(
        "%cВнимание! Используется локальное хранилище вместо сохранения на сервере. Возможно причина тому отсутствие интернета.",
        "font-family: monospace; font-size: 20px; padding: 20px;"
      );
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
    if (toJS(this.countersData).length !== 0) return;
    const loadedCountersArray: ICounter[] = JSON.parse(
      localStorage.getItem("All Counters")!
    );
    loadedCountersArray.forEach((item) => {
      this.countersData.push(item);
    });
  }
}

export default new counterStore();
