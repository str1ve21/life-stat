import { makeAutoObservable } from "mobx";
import ICounterDialog from "../interfaces/ICounterDialog";

class counterDialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  counterDialogData: ICounterDialog[] = [];

  createDialog(item: ICounterDialog) {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.counterDialogData.push(item);
  }

  deleteDialog() {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.counterDialogData = [];
  }
}

export default new counterDialogStore();
