import { throttle } from "throttle-debounce";

import IParallaxOptions from "../interfaces/IParallaxOptions";

export default function createParallax(options: IParallaxOptions): void {
  const page = document.querySelector<HTMLElement>("#page");
  if (options.power > 0) {
    page?.addEventListener(
      "scroll",
      throttle(15, () => {
        if (page.scrollTop < options.startFrom) {
          return;
        }
        if (page.scrollTop > options.startFrom + options.maxTranslateY) {
          return;
        }
        let parallaxNumber: number =
          (page.scrollTop - options.startFrom) / options.power;
        document.querySelector<HTMLElement>(
          options.elem
        )!.style.transform = `translateY(${parallaxNumber}px)`;
      })
    );
  }
  if (options.power <= 0) {
    console.error(
      `Element ${options.elem} should have power (${options.power}) more than 0!`
    );
  }
}
