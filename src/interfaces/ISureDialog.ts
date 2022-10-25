export default interface ISureDialog {
  id: number;
  title: string;
  text: string;
  yesText: string;
  noText: string;
  yesFunction: () => void;
  noFunction: () => void;
}
