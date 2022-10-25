import { makeAutoObservable } from "mobx";
import IInfoDialog from "../interfaces/IInfoDialog";

class infoDialogStore {
  constructor() {
    makeAutoObservable(this);
  }

  infoDialogData: IInfoDialog[] = [];

  createDialog(item: IInfoDialog) {
    this.infoDialogData.push(item);
    setTimeout(() => {
      document.querySelector<HTMLDialogElement>("dialog")?.close();
      document
        .querySelector<HTMLDialogElement>(
          `#infoDialog${this.infoDialogData[0].id}`
        )!
        .showModal();
    }, 0);
  }

  deleteDialog() {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    this.infoDialogData = [];
  }
}

export default new infoDialogStore();
