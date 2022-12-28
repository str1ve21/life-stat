import { makeAutoObservable } from "mobx";
import ISureDialog from "../interfaces/ISureDialog";

class dialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  sureDialogData: ISureDialog[] = [];

  deleteDialog() {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.sureDialogData = [];
  }

  createDialog(item: ISureDialog) {
    this.deleteDialog();
    this.sureDialogData.push(item);
  }
}

export default new dialogStore();
