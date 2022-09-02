export default interface IFilterOptions {
  readonly scrollBlock: string;
  readonly elem: string;
  readonly filterType: string;
  readonly startFrom?: number;
  readonly finishAfter?: number;
  readonly invertedValue?: boolean;
  readonly throttle?: number;
}
