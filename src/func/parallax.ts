// interfaces
import IParallaxYOptions from "../interfaces/IParallaxYOptions";

export function createParallaxY(options: IParallaxYOptions): void {
  if (options.power <= 0) {
    console.error(
      `Element ${options.elem} should have options: {power: ${options.power}}  more than 0.`
    );
    return;
  }

  const startFromValue: number = options.startFrom! || 0;
  const finishAfterValue: number = options.finishAfter! || 0;
  const finishBeforeValue: number = options.finishBefore;
  const HTMLElement: HTMLElement = document.documentElement;
  const block: number = options.block;
  let whenZero: number;
  let scrolledFromTop: number;
  let parallaxNumber: number;

  const parallaxFunction = () => {
    if (!document.querySelector<HTMLElement>(options.elem)) return;

    scrolledFromTop =
      (HTMLElement.scrollTop /
        (HTMLElement.scrollHeight - HTMLElement.clientHeight)) *
      100;

    whenZero =
      ((document.documentElement.clientHeight * block) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;

    if (scrolledFromTop < startFromValue) return;

    if (finishAfterValue) {
      if (scrolledFromTop > finishAfterValue) {
        document.querySelector<HTMLElement>(
          options.elem
        )!.style.transform = `translateY(0%)`;
        return;
      }
    } else {
      if (scrolledFromTop > whenZero - finishBeforeValue) {
        document.querySelector<HTMLElement>(
          options.elem
        )!.style.transform = `translateY(0%)`;
        return;
      }
    }

    parallaxNumber =
      (-whenZero + finishBeforeValue + scrolledFromTop) * options.power;

    document.querySelector<HTMLElement>(
      options.elem
    )!.style.transform = `translateY(${parallaxNumber}%)`;
  };

  return parallaxFunction();
}
