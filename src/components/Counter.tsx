import { useMemo, useState } from "react";

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
      <div className="flex space-x-4">
        <button className="text-2xl" onClick={increment}>
          +
        </button>
        <text className="text-3xl w-8 text-center">{value}</text>
        <button className="text-2xl" onClick={decrement}>
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
  const [value, setValue] = useState(initialValue);

  const increment = useMemo(() => {
    return () => setValue((prev) => prev + 1);
  }, []);

  const decrement = useMemo(() => {
    return () => setValue((prev) => prev - 1);
  }, []);

  return {
    value,
    increment,
    decrement,
  };
};
