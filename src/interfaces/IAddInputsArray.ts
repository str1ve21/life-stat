export default interface IAddInputsArray {
  readonly id: number;
  type: string;
  htmlId: string;
  labelText: string;
  placeholder?: string;
  defValue?: string | number;
}
