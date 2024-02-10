import { atom } from "recoil";

export const selectedPageState = atom({
  key: "selectedPageState",
  default: "/",
});
