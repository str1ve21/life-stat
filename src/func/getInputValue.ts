export function getInputValue(elem: string): string {
  if (!document.querySelector<HTMLInputElement>(elem)) {
    return "Wrong element.";
  }
  return document.querySelector<HTMLInputElement>(elem)!.value;
}
