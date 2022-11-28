// react, router, mobx
import { makeAutoObservable, runInAction, toJS } from "mobx";

// local functions
import counterStorage from "../func/setStorage";
import {
  errResponse,
  logResponse,
  logText,
  warnResponse,
} from "../func/console";
import { serverURL, getBody, postCountersBody } from "../func/fetchData";

// interfaces
import ICounter from "../interfaces/ICounter";

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

    this.saveToLocalStorage();
    this.fetchPostCounters();
  }

  editCounter(editedCounter: ICounter) {
    const counterToEdit = toJS(this.countersData).findIndex(
      (obj) => obj.id === editedCounter.id
    );

    this.countersData.splice(counterToEdit, 1, editedCounter);

    this.saveToLocalStorage();
    this.fetchPostCounters();
  }

  removeCounter(id: string) {
    const idToRemove = toJS(this.countersData).findIndex(
      (obj) => obj.id === id
    );

    this.countersData.splice(idToRemove, 1);

    this.saveToLocalStorage();
    this.fetchPostCounters();
  }

  changeValue(elem: string, inputValue: number) {
    const objToChange = toJS(this.countersData).findIndex(
      (obj) => obj.id === elem
    );

    this.countersData[objToChange].lastEdit = Date.now();
    this.countersData[objToChange].counter += inputValue;

    this.saveToLocalStorage();
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
        console.error(errResponse("SCounters", "GET", "if", response.status));
        return response.status;
      }

      console.log(
        logResponse(
          "SCounters",
          "GET",
          "response",
          response.status,
          "По кайфу работает"
        )
      );

      const serverCounters: string = await response.text();

      if (isInitial && serverCounters !== "null") {
        console.log(
          logResponse(
            "SCounters",
            "GET",
            "initial",
            response.status,
            "Started..."
          )
        );

        const local = localStorage.getItem(counterStorage());
        const server = serverCounters;
        const isSynced: boolean = local === server;

        console.log(
          logText("SCounters", "isInitial", `LocalStorage data: ${local}`),
          "\n\n",
          logText("SCounters", "isInitial", `Server data: ${server}`)
        );

        if (!isSynced) {
          console.warn(
            warnResponse(
              "SCounters",
              "GET",
              "sync check",
              undefined,
              `isSynced: ${isSynced}, data conflict`
            )
          );
          return "Data conflict";
        }
      }

      if (serverCounters !== "null") {
        runInAction(() => {
          this.setStorage(JSON.parse(serverCounters));
        });
      }

      this.saveToLocalStorage();

      return response.status;
    } catch (error) {
      console.error(errResponse("SCounters", "GET", "catch", undefined, error));

      console.log(
        logResponse(
          "SCounters",
          "GET",
          "catch",
          undefined,
          "Внимание! Используется локальное хранилище вместо сохранения на сервере. Возможно причина тому отсутствие интернета"
        )
      );

      this.loadFromLocalStorage();
    }
  }

  async fetchPostCounters() {
    try {
      const JSONStore: string = localStorage.getItem(counterStorage())!;

      const response = await fetch(
        `${serverURL()}/saveCounters`,
        postCountersBody(JSONStore)
      );

      console.log(
        logResponse(
          "SCounters",
          "POST",
          "response",
          response.status,
          "По кайфу работает"
        )
      );
    } catch (error) {
      console.error(
        errResponse("SCounters", "POST", "catch", undefined, error)
      );

      console.log(
        logResponse(
          "SCounters",
          "POST",
          "catch",
          undefined,
          "Внимание! Используется локальное хранилище вместо сохранения на сервере. Возможно причина тому отсутствие интернета"
        )
      );

      this.saveToLocalStorage();
    }
  }

  clearLocalStorage() {
    localStorage.removeItem(counterStorage());
  }

  saveToLocalStorage() {
    const savedCountersArray = JSON.stringify(toJS(this.countersData));
    localStorage.setItem(counterStorage(), savedCountersArray);
  }

  loadFromLocalStorage() {
    const loadedCountersArray: ICounter[] = JSON.parse(
      localStorage.getItem(counterStorage())!
    );
    this.setStorage(loadedCountersArray);
  }
}

export default new counterStore();
