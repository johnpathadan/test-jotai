"use client";
import { atom, useAtom } from "jotai";

export const counterAtom = atom(0);

export default function Home() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
}
