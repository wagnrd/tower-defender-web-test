import { writable } from "svelte/store";

const isNavBarRequestedToHide = writable(false);

export { isNavBarRequestedToHide };