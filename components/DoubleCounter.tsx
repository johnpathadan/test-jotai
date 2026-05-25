import { doubledCounterAtom } from "@/app/atoms";
import { useAtom } from "jotai";

const DoubleCounter = () => {
    const [doubleCounter] = useAtom(doubledCounterAtom);
  return (
    <>
      {doubleCounter}
    </>
  );
};

export default DoubleCounter;
