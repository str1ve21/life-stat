export default interface IFilterOptions {
  readonly scrollBlock?: string;
  readonly elem: string;
  readonly filterType: string;
  readonly initialFilterValue?: number;
  readonly startFrom?: number;
  readonly finishAfter?: number;
  readonly reversedValue?: boolean;
  readonly maxFilter?: number;
  readonly throttle?: number;
}
