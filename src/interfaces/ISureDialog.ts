export default interface ISureDialog {
  counterID: number;
  title: string;
  text: string;
  yesText: string;
  noText: string;
  yesFunction: () => void;
  noFunction: () => void;
}
