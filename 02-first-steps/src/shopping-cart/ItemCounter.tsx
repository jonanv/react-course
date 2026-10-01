import { useState, type CSSProperties } from "react";

interface Props {
    name: string;
    quantity?: number
};

// const itemCounterStyle: CSSProperties = {
//     display: "flex",
//     alignItems: "center",
//     gap: 10,
//     marginTop: 10
// };

import './ItemCounter.css';

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    const [ count, setCount ] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtrac = () => {
        if (count === 1) return;
        setCount(count - 1);
    }

    return (
        <section className="item-row">
            <span 
                className="item-text"
                style={{
                    color: count === 1 ? 'red' : 'black'
                }}
            >
                { name }
            </span>
            <button
                onClick={handleAdd}
            >+</button>
            <span>{ count }</span>
            <button
                onClick={handleSubtrac}
            >-</button>
        </section>
    )
}
