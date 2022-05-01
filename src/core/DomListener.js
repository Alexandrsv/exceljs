export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error("$root is required for DomListener");
    }
    this.listeners = listeners;
    this.$root = $root;
  }

  initDOMListeners() {
    console.log("initDOMListeners", this);
  }

  removeDOMListeners() {
    throw new Error("removeDOMListeners() is not implemented");
  }
}
