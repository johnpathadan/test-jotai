import { atom } from "jotai";

export const counterAtom = atom(0);
export const doubledCounterAtom = atom((get) => get(counterAtom) * 2); //derived state
//finds out what count is, and also what it is times 2