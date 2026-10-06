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

const obj: any = {
    'zip-code': '123443',
    'city': 'Manizales'
}

const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10
}

interface Props {
    isActive?: boolean;
}

export const MyAwesomeApp = ({ isActive = true }: Props) => {
    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{ firstName }</h1>
            <h3>{ lastName }</h3>

            <p className="mi-clase-favorita">{ games.join(', ') }</p>
            <p>{ 2 + 2 }</p>

            <h1>{ isActive ? 'Activo' : 'No activo' }</h1>

            <p
                style={myStyles}
            >{ JSON.stringify(obj) }</p>
        </div>
    );
}