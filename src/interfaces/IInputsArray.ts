export default interface IInputsArray {
  readonly id: number;
  type: string;
  htmlId: string;
  labelText: string;
  placeholder?: string;
  defValue?: string | number;
}
