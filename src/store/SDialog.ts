import { makeAutoObservable } from "mobx";
import ISureDialog from "../interfaces/ISureDialog";

class dialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  sureDialogData: ISureDialog[] = [];

  createDialog(item: ISureDialog) {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.sureDialogData.push(item);
  }

  deleteDialog() {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.sureDialogData = [];
  }
}

export default new dialogStore();
