import { useEffect, type ReactElement } from "react";

export default function useStagger(
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  components: ReactElement[] | string[],
  rndMultiplier: number = 300,
  delay: number = 0
) {
  useEffect(() => {
    if (count >= components.length) return;

    const rnd = Math.floor(Math.random() * rndMultiplier);
    const delayStaggerStart = count === 0 && delay ? delay : rnd
    const timer = setTimeout(() => {
      setCount((prev: number) => prev + 1);
    }, delayStaggerStart);
    
    return () => clearTimeout(timer);
  }, [count, components.length, setCount, rndMultiplier, delay]);
}
