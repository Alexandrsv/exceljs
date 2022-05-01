import { ExcelComponent } from "core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor(
    $root,
    options = {
      name: "Formula",
      listeners: ["input", "click"],
    }
  ) {
    super($root);
  }

  toHTML() {
    return `
          <div class="info">fx</div>
          <div class="input" contenteditable="true" spellcheck="false"></div>
`;
  }

  onInput(event) {
    console.log("Formula:onInput ", event);
  }
}
