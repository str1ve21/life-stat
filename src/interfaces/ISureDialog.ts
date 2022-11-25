export default interface ISureDialog {
  id: string;
  title: string;
  text: string;
  yesText: string;
  noText: string;
  isYesFunc: boolean;
  isNoFunc: boolean;
  canClose: boolean;
  yesFunction?: () => void;
  noFunction?: () => void;
}
