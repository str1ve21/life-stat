export function sliderAnimation(
  parentQuery: string,
  slide: number,
  duration?: number
): void {
  const parent = document.querySelector(parentQuery);
  parent?.scrollTo({
    top: 0,
    left: parent.clientWidth * slide,
    behavior: "smooth",
  });
}
