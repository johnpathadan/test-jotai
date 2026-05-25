import { atom } from "jotai";
import { loadable } from "jotai/utils";
//loadable is depricated in favour of unwrap

export const counterAtom = atom(0);
export const doubledCounterAtom = atom((get) => get(counterAtom) * 2);
const asyncUserAtom = atom(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
});
export const loadableUserAtom = loadable(asyncUserAtom);
