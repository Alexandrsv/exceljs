export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error("$root is required for DomListener");
    }
    this.$root = $root;
  }
}
