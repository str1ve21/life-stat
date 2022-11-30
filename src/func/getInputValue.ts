export function getInputValue(elem: string): string {
  if (!document.querySelector<HTMLInputElement>(elem)) {
    return "Wrong element.";
  }
  return document.querySelector<HTMLInputElement>(elem)!.value;
}

export function getCheckboxValue(elem: string): boolean {
  if (!document.querySelector<HTMLInputElement>(elem)) {
    return false;
  }
  return document.querySelector<HTMLInputElement>(elem)!.checked;
}
