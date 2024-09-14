export function getDataAttrValueFromClosestElementWithClass<T>(element: HTMLElement, attr: string, cls: string): T {
  return getClosestTarget(element, cls).dataset[ attr ] as unknown as T;
}

function getClosestTarget(element: HTMLElement | SVGElement, cls: string): HTMLElement {
  return element.closest(cls) as HTMLElement;
}
