// react, router, mobx
import { makeAutoObservable, runInAction, toJS } from "mobx";

// local functions
import counterStorage from "../func/counterStorage";
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

  async fetchGetCounters(options: { isInitial: boolean }) {
    try {
      const response = await fetch(`${serverURL()}/allCounters`, getBody());

      if (response.status !== 200) {
        console.error(errResponse("SCounters", "GET", "if", response.status));
        return { code: response.status };
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

      let serverCounters: ICounter[] = await response.json();
      let localCounters: ICounter[] = JSON.parse(
        localStorage.getItem(counterStorage())!
      );

      if (serverCounters === null) {
        serverCounters = [];
      }
      if (localCounters === null) {
        localCounters = [];
        localStorage.setItem(counterStorage(), "[]");
      }

      if (options.isInitial) {
        console.log(
          logResponse(
            "SCounters",
            "GET",
            "initial",
            response.status,
            "Started..."
          )
        );

        console.log(
          `\n${logText(
            "SCounters",
            "isInitial",
            `LocalStorage data: ${JSON.stringify(localCounters)}`
          )}\n\n${logText(
            "SCounters",
            "isInitial",
            `Server data: ${JSON.stringify(serverCounters)}`
          )}\n\n`
        );

        let isSynced: boolean = true;

        for (let i = 0; i < serverCounters.length; i++) {
          try {
            serverCounters[i].lastEdit === localCounters[i].lastEdit
              ? (isSynced = true)
              : (isSynced = false);
            if (!isSynced) {
              console.warn(
                warnResponse(
                  "SCounters",
                  "GET",
                  "for sync check",
                  undefined,
                  `isSynced: ${isSynced}, data conflict`
                )
              );
              return {
                type: "Data conflict",
              };
            }
          } catch (error) {
            console.warn(
              warnResponse(
                "SCounters",
                "GET",
                "for catch",
                undefined,
                `Something is undefined, data conflict`
              )
            );
            return {
              type: "Data conflict",
            };
          }
        }

        console.log(
          logResponse(
            "SCounters",
            "GET",
            "initial",
            response.status,
            "Done, same data"
          )
        );
      }

      if (serverCounters) {
        runInAction(() => {
          this.setStorage(serverCounters);
        });
      }

      this.saveToLocalStorage();

      return { code: response.status };
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
    this.saveToLocalStorage();
    try {
      const JSONStore: string = JSON.stringify(toJS(this.countersData));

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
    if (localStorage.getItem(counterStorage())) {
      const loadedCountersArray: ICounter[] = JSON.parse(
        localStorage.getItem(counterStorage())!
      );
      this.setStorage(loadedCountersArray);
    }
  }
}

export default new counterStore();
