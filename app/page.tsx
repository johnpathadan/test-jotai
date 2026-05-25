"use client";
import { atom, useAtom } from "jotai";
import Counter from "@/components/Counter";
import { counterAtom } from "./atoms";
import DoubleCounter from "@/components/DoubleCounter";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <>
      <h1>{count}</h1>
      <Counter />
      <DoubleCounter />
      <UserInfo />
    </>
  );
}
