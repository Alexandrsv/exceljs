import { DomListener } from "core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  static className2 = `excel__${this.constructor.name.toLowerCase()}`;
  // Возвращает шаблон компонента
  toHTML() {
    return "";
  }

  init() {
    this.initDOMListeners();
  }
}
