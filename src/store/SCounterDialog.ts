import { makeAutoObservable } from "mobx";
import ICounterDialog from "../interfaces/ICounterDialog";

class counterDialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  counterDialogData: ICounterDialog[] = [];

  createDialog(item: ICounterDialog) {
    this.counterDialogData.push(item);
    setTimeout(() => {
      document.querySelector<HTMLDialogElement>("dialog")?.close();
      document
        .querySelector<HTMLDialogElement>(
          `#counterDialog${this.counterDialogData[0].id}`
        )!
        .showModal();
    }, 0);
  }

  deleteDialog() {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.counterDialogData = [];
  }
}

export default new counterDialogStore();
