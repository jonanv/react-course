import { ItemCounter } from "./shopping-car/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            
            <ItemCounter name="Nintendo Swtch 2" />
            <ItemCounter name="Pro Controller" />
            <ItemCounter name="Super Smash" />
        </>
    );
}