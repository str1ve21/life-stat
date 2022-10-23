export default interface ISureDialog {
  id: string;
  title: string;
  text: string;
  yesText: string;
  noText: string;
  yesFunction: () => void;
  noFunction: () => void;
}
