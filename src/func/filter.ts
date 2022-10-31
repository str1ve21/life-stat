import { throttle } from "throttle-debounce";

// interfaces
import IFilterOptions from "../interfaces/IFilterOptions";

export function createFilter(options: IFilterOptions): void {
  const startFromValue = options.startFrom! || 0;
  const finishAfterValue = options.finishAfter! || 100;
  const reversedValue = options.reversedValue! || false;
  const HTMLElement: HTMLElement = document.documentElement;
  const maxFilterValue = options.maxFilter! || 1;
  let scrolledFromTop: number;
  let filterNumber: number;

  const filterFunction = () => {
    scrolledFromTop =
      (HTMLElement.scrollTop /
        (HTMLElement.scrollHeight - HTMLElement.clientHeight)) *
      100;

    if (scrolledFromTop < startFromValue) return;

    if (scrolledFromTop > finishAfterValue) return;

    filterNumber = ((scrolledFromTop - startFromValue) * maxFilterValue) / 8;

    if (filterNumber >= maxFilterValue) return;

    if (reversedValue) filterNumber = 1 - filterNumber;

    document.querySelector<HTMLElement>(
      options.elem
    )!.style.filter = `${options.filterType}(${filterNumber})`;
  };

  return filterFunction();
}
