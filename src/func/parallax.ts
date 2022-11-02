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

  const initialTranslateValue = options.initialTranslateY || 0;
  const startFromValue = options.startFrom! || 0;
  const finishAfterValue = options.finishAfter! || window.outerHeight;
  const HTMLElement: HTMLElement = document.documentElement;
  let scrolledFromTop: number;
  let parallaxNumber: number;

  const parallaxFunction = () => {
    if (!document.querySelector<HTMLElement>(options.elem)) return;

    scrolledFromTop =
      (HTMLElement.scrollTop /
        (HTMLElement.scrollHeight - HTMLElement.clientHeight)) *
      100;

    if (scrolledFromTop < startFromValue) return;

    if (scrolledFromTop > finishAfterValue) {
      document.querySelector<HTMLElement>(
        options.elem
      )!.style.transform = `translateY(${0}%)`;
      return;
    }

    parallaxNumber = ((scrolledFromTop - startFromValue) / options.power) * 10;

    document.querySelector<HTMLElement>(
      options.elem
    )!.style.transform = `translateY(${
      initialTranslateValue + parallaxNumber
    }%)`;
  };

  return parallaxFunction();
}
