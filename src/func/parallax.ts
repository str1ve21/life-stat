import { throttle } from "throttle-debounce";

// interfaces
import IParallaxYOptions from "../interfaces/IParallaxYOptions";

export function createParallaxY(options: IParallaxYOptions): void {
  if (options.power <= 0) {
    console.error(
      `Element ${options.elem} should have options: {power: ${options.power}}  more than 0.`
    );
    return;
  }

  const startFromValue = options.startFrom! || 0;
  const initialTranslateValue = options.initialTranslateY || 0;
  const finishAfterValue = options.finishAfter! || window.outerHeight;
  const throttleValue = options.throttle! || 15;
  let scrolledFromTop: number;

  const parallaxFunction = throttle(throttleValue, () => {
    scrolledFromTop = window.scrollY;

    if (scrolledFromTop < startFromValue) return;

    if (scrolledFromTop > startFromValue + finishAfterValue * options.power)
      return;

    let parallaxNumber: number =
      (scrolledFromTop - startFromValue) / options.power;

    document.querySelector<HTMLElement>(
      options.elem
    )!.style.transform = `translateY(${
      initialTranslateValue + parallaxNumber
    }px)`;
  });

  return parallaxFunction();
}
