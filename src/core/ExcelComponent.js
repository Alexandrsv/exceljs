import { DomListener } from "core/DomListener";

export class ExcelComponent extends DomListener {
  static className2 = `excel__${this.constructor.name.toLowerCase()}`;
  // Возвращает шаблон компонента
  toHTML() {
    return "";
  }
}
