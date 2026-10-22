import { useState } from 'react'

export const useCounter = (initialValue: number = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const handlePrevious = () => {
        if (counter === 1) return;
        setCounter(counter - 1);
    }

    const handleNext = () => {
        setCounter(counter + 1);
    }

    return {
        // Values
        counter,

        // Methods / Actions
        handlePrevious,
        handleNext,
    }
}
