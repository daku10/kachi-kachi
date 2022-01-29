import { useEffect, useMemo, useState } from "react";

type Props = {
  appName: string;
};

export const Counter = ({ appName }: Props) => {
  const { value, increment, decrement } = useCounter({
    appName,
    initialValue: 0,
  });

  return (
    <div className="h-screen grid place-items-center">
      <div className="flex space-x-4 items-center">
        <button
          className="text-2xl bg-amber-200 rounded-full w-8 h-8"
          onClick={increment}
        >
          +
        </button>
        <text className="text-3xl w-8 text-center">{value}</text>
        <button
          className="text-2xl bg-amber-200 rounded-full w-8 h-8"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

type KVProps = {
  appName: string;
  initialValue: number;
};

const useCounter = ({ appName, initialValue }: KVProps) => {
  const [value, setValue] = useState(
    Number(localStorage.getItem(appName)) ?? initialValue
  );

  const increment = useMemo(() => {
    return () => setValue((prev) => prev + 1);
  }, []);

  const decrement = useMemo(() => {
    return () => setValue((prev) => prev - 1);
  }, []);

  useEffect(() => {
    localStorage.setItem(appName, value.toString());
  }, [value, appName]);

  return {
    value,
    increment,
    decrement,
  };
};
