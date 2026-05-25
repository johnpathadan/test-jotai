// import { counterAtom } from "@/app/page";
import { counterAtom } from "@/app/atoms";
import { useAtom } from "jotai";

const Counter = () => {
    const [_, setCount] = useAtom(counterAtom);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
