import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    if (element) {
      this.scrollToElement(element);
    }
  }

  private __getElementById(id: string): HTMLElement | undefined {
    const element = document.getElementById(id);
    if (element) {
      return element;
    }
    return undefined;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
