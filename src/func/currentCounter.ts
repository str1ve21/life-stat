import ICounter from "../interfaces/ICounter";
import SCounters from "../store/SCounters";
import { toJS } from "mobx";

export function findCounterByID(key: number | string) {
  const allCounters: ICounter[] = toJS(SCounters.countersData);
  console.log(allCounters)
  const counter: ICounter | undefined = allCounters.find(
    (obj) => obj.id === key
  );
  return counter;
}

export function inArrayIDByID(key: number | string) {
  const allCounters: ICounter[] = toJS(SCounters.countersData);
  const inArrayID: number = allCounters.findIndex((obj) => obj.id === key);
  return inArrayID;
}
