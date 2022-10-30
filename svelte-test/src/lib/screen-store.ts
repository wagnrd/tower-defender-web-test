import { writable } from "svelte/store";

let isMobileState = writable(false);

export { isMobileState };