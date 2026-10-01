import { ItemCounter } from "./shopping-car/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            
            <ItemCounter name="Nintendo Swtch 2" quantity={2} />
            <ItemCounter name="Pro Controller" quantity={1} />
            <ItemCounter name="Super Smash" quantity={3} />
        </>
    );
}