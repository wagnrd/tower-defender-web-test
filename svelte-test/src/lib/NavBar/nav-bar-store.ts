import { writable } from "svelte/store";

const isNavBarHiddenState = writable(false);

export { isNavBarHiddenState };