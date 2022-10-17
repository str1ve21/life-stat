export default interface ICounter {
  id: number;
  title: string;
  description?: string;
  counter: number;
  goal: number;
  defaultInput?: number;
  color: string;
}
