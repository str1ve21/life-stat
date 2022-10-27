import { throttle } from "throttle-debounce";

// interfaces
import IFilterOptions from "../interfaces/IFilterOptions";

export function createFilter(options: IFilterOptions): void {
  const startFromValue = options.startFrom! || 0;
  const finishAfterValue = options.finishAfter! || 100;
  const throttleValue = options.throttle! || 15;
  const reversedValue = options.reversedValue! || false;
  const maxFilterValue = options.maxFilter! || 1;
  let scrolledFromTop;

  const filterFunction = throttle(throttleValue, () => {
    scrolledFromTop = window.scrollY;

    if (scrolledFromTop < startFromValue) return;

    if (scrolledFromTop > startFromValue + finishAfterValue) return;

    let filterNumber =
      ((scrolledFromTop - startFromValue) / finishAfterValue) * maxFilterValue;

    if (filterNumber >= maxFilterValue) return;

    if (reversedValue) filterNumber = 1 - filterNumber;

    document.querySelector<HTMLElement>(
      options.elem
    )!.style.filter = `${options.filterType}(${filterNumber})`;
  });

  return filterFunction();
}
