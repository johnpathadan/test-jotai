"use client";
import { atom, useAtom } from "jotai";
import Counter from "@/components/Counter";
import { counterAtom } from "./atoms";
import DoubleCounter from "@/components/DoubleCounter";

export default function Home() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <>
      <h1>{count}</h1>
      <Counter />
      <DoubleCounter />
    </>
  );
}
