import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
};

const itemsInCart: ItemInCart[] = [
    {
        productName: 'Nintendo Swtch 2',
        quantity: 2
    },
    {
        productName: 'Pro Controller',
        quantity: 1
    },
    {
        productName: 'Super Smash',
        quantity: 3
    },
    {
        productName: 'Super Mario Bros',
        quantity: 4
    },
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            
            {
                itemsInCart.map(({ productName, quantity }: ItemInCart) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
        </>
    );
}