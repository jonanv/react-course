// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Fernando</h1>
//             <h3>Herrera</h3>
//         </>
//     );
// }

import type { CSSProperties } from "react";

const firstName: string = 'Johanny';
const lastName: string = 'Vargas';

const games: string[] = ['Call of Duty', 'FIFA26', 'Assasind Creed'];

const isActive: boolean = true;

const obj: any = {
    'zip-code': '123443',
    'city': 'Manizales'
}

const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10
}

export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{ firstName }</h1>
            <h3>{ lastName }</h3>

            <p>{ games.join(', ') }</p>

            <p>{ 2 + 2 }</p>

            <p>{ isActive ? 'Activo' : 'No activo' }</p>

            <p
                style={myStyles}
            >{ JSON.stringify(obj) }</p>
        </>
    );
}