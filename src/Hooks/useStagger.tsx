import { useEffect, type ReactElement } from "react";

export default function useStagger(
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  components: ReactElement[],
  rndMultiplier: number = 300
) {
  useEffect(() => {
    if (count >= components.length) return;

    const rnd = Math.floor(Math.random() * rndMultiplier);
    const timer = setTimeout(() => {
      setCount((prev: number) => prev + 1);
    }, rnd);

    return () => clearTimeout(timer);
  }, [count, components.length, setCount, rndMultiplier]);
}
