export default interface ICounter {
  id: number;
  title: string;
  description?: string;
  counter: number;
  defaultInput?: number;
  color: string;
}
