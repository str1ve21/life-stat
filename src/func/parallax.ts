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

  let initialTranslateValue = options.initialTranslateY || 0;
  let startFromValue = options.startFrom! || 0;
  let finishAfterValue = options.finishAfter! || window.outerHeight;
  let scrolledFromTop: number;

  const parallaxFunction = () => {
    scrolledFromTop = window.scrollY;

    if (scrolledFromTop < startFromValue) return;

    if (scrolledFromTop > startFromValue + finishAfterValue * options.power)
      return;

    window.onresize = throttle(250, () => {
      initialTranslateValue = options.initialTranslateY || 0;
      startFromValue = options.startFrom! || 0;
      finishAfterValue = options.finishAfter! || window.outerHeight;
    });

    let parallaxNumber: number =
      (scrolledFromTop - startFromValue) / options.power;

    document.querySelector<HTMLElement>(
      options.elem
    )!.style.transform = `translateY(${
      initialTranslateValue + parallaxNumber
    }px)`;
  };

  return parallaxFunction();
}
