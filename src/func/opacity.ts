import { throttle } from "throttle-debounce";

// interfaces
import IFilterOptions from "../interfaces/IFilterOptions";

export function createOpacity(options: IFilterOptions): void {
  const page = document.querySelector<HTMLElement>(options.scrollBlock);
  const initialFilterValue = options.initialFilterValue || 0;
  const startFromValue = options.startFrom! || 0;
  const finishAfterValue = options.finishAfter! || 100;
  const throttleValue = options.throttle! || 15;
  const reversedValue = options.reversedValue! || false;

  document.querySelector<HTMLElement>(
    options.elem
  )!.style.filter = `${options.filterType}(${initialFilterValue})`;

  page?.addEventListener(
    "scroll",
    throttle(throttleValue, () => {
      if (page.scrollTop < startFromValue) return;

      if (page.scrollTop > startFromValue + finishAfterValue) return;

      let filterNumber = (page.scrollTop - startFromValue) / finishAfterValue;

      if (reversedValue) filterNumber = 1 - filterNumber;

      document.querySelector<HTMLElement>(
        options.elem
      )!.style.filter = `${options.filterType}(${filterNumber})`;
    })
  );
}