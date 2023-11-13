import PocketBase from "pocketbase";
console.log(import.meta.env.VITE_POCKET_BASE_URL);

export const pb = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);
