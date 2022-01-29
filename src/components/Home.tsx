import { useRouter } from "next/router";
import { useMemo, useRef } from "react";

export const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleClick = useMemo(() => {
    return () => {
      router.push({
        pathname: `app/${inputRef.current?.value}`,
      });
    };
  }, [router]);
  return (
    <div className="grid place-items-center h-screen">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold underline text-center">Counter</h1>
        <div>
          <input
            type="text"
            className="border-2 border-indigo-400 rounded-md"
            ref={inputRef}
          />
        </div>
        <div className="text-center">
          <button
            className="w-8 border-2 border-sky-300 rounded-lg"
            onClick={handleClick}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};
