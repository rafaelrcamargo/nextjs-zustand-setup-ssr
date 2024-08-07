"use client";

import { useCounterStore } from "./provider";

export default function Home() {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  );

  return (
    <section>
      <div>
        Stars: <b>{count}</b> (Client [Hydrated])
      </div>

      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </section>
  );
}
