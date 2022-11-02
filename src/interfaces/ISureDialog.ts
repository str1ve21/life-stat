export default interface ISureDialog {
  id: string;
  title: string;
  text: string;
  yesText: string;
  noText: string;
  isYesFunc: boolean;
  isNoFunc: boolean;
  yesFunction?: () => void;
  noFunction?: () => void;
}
