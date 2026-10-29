import { useMemo } from "react";
import { useCounter } from "@/hooks/useCounter";

const heavyStuff = (interationNumber: number) => {
    console.time('heavy_stuff_started');

    for (let index = 0; index < interationNumber; index++) {
        console.log('Ahí vamos...');
    }

    console.timeEnd('heavy_stuff_started');
    return `${ interationNumber } iteraciones realizadas`;
}

export const MemoCounter = () => {

    const { counter, handleNext } = useCounter(40_000);
    const { counter: counter2, handleNext: handleNext2 } = useCounter(40_000);

    const myHeavyValue = useMemo(() => heavyStuff(counter), []);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl text-white font-bold">Memo - useMemo { myHeavyValue }</h1>
            <hr />

            <h4>Counter: { counter }</h4>
            <h4>Counter: { counter2 }</h4>

            <button 
                className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer"
                onClick={handleNext}>
                +1 - Counter1
            </button>
            <button 
                className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer"
                onClick={handleNext2}>
                +1 - Counter2
            </button>
        </div>
    )
}
