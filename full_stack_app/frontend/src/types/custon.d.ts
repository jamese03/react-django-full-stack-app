// no @types module so we must declar ourselves
declare module "mobx-devtools-mst" {
    function makeInspectable(state: object): void;
    export default makeInspectable;
}