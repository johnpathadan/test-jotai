import { atom } from "jotai";

export const cartAtom = atom([]); //this is
//an atom for the shopping cart items

//create an atom that depends on the Total value
export const totalAtom = atom((get) =>
  // @ts-ignore
  get(cartAtom).reduce((total, item) => total + item.price, 0),
);
