import { makeAutoObservable } from "mobx";
import IInfoDialog from "../interfaces/IInfoDialog";

class infoDialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  infoDialogData: IInfoDialog[] = [];

  createDialog(item: IInfoDialog) {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.infoDialogData.push(item);
  }

  deleteDialog() {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.infoDialogData = [];
  }
}

export default new infoDialogStore();
