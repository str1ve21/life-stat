import { makeAutoObservable } from "mobx";
import ISureDialog from "../interfaces/ISureDialog";

class dialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  sureDialogData: ISureDialog[] = [];

  createDialog(item: ISureDialog) {
    this.sureDialogData.push(item);
    setTimeout(() => {
      document.querySelector<HTMLDialogElement>("dialog")?.close();
      document
        .querySelector<HTMLDialogElement>("#" + this.sureDialogData[0].id)!
        .showModal();
    }, 0);
  }

  deleteDialog() {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.sureDialogData = [];
  }
}

export default new dialogStore();
