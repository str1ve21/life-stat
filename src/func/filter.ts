import { throttle } from "throttle-debounce";

// interfaces
import IFilterOptions from "../interfaces/IFilterOptions";

export function createFilter(options: IFilterOptions): void {
  let startFromValue = options.startFrom! || 0;
  let finishAfterValue = options.finishAfter! || 100;
  let reversedValue = options.reversedValue! || false;
  let maxFilterValue = options.maxFilter! || 1;
  let scrolledFromTop;

  const filterFunction = () => {
    scrolledFromTop = window.scrollY;

    if (scrolledFromTop < startFromValue) return;

    if (scrolledFromTop > startFromValue + finishAfterValue) return;

    let filterNumber =
      ((scrolledFromTop - startFromValue) / finishAfterValue) * maxFilterValue;

    if (filterNumber >= maxFilterValue) return;

    if (reversedValue) filterNumber = 1 - filterNumber;

    window.onresize = throttle(333, () => {
      startFromValue = options.startFrom! || 0;
      finishAfterValue = options.finishAfter! || 100;
      maxFilterValue = options.maxFilter! || 1;
    });

    document.querySelector<HTMLElement>(
      options.elem
    )!.style.filter = `${options.filterType}(${filterNumber})`;
  };

  return filterFunction();
}
