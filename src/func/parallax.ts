import { throttle } from "throttle-debounce";

// interfaces
import IParallaxYOptions from "../interfaces/IParallaxYOptions";
import IFilterOptions from "../interfaces/IFilterOptions";

export function createParallaxY(options: IParallaxYOptions): void {
  if (options.power <= 0) {
    console.error(
      `Element ${options.elem} should have options: {power: ${options.power}}  more than 0!`
    );
    return;
  }

  const page = document.querySelector<HTMLElement>(options.scrollBlock);
  const startFromValue = options.startFrom! || 0;
  const initialTranslateValue = options.initialTranslateY || 0;
  const finishAfterValue = options.finishAfter! || window.outerHeight;
  const throttleValue = options.throttle! || 15;

  document.querySelector<HTMLElement>(
    options.elem
  )!.style.transform = `translateY(${initialTranslateValue}px)`;

  page?.addEventListener(
    "scroll",
    throttle(throttleValue, () => {
      if (page.scrollTop < startFromValue) return;

      if (page.scrollTop > startFromValue + finishAfterValue * options.power)
        return;

      let parallaxNumber: number =
        (page.scrollTop - startFromValue) / options.power;

      document.querySelector<HTMLElement>(
        options.elem
      )!.style.transform = `translateY(${
        initialTranslateValue + parallaxNumber
      }px)`;
    })
  );
}

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
