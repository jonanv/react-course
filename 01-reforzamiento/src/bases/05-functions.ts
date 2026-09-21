function greet(name: string): string {
    return `Hola ${ name }`;
}

// const greet2 = (name: string): string => {
//     return `Hola ${ name }`;
// }

const greet2 = (name: string): string => `Hola ${ name }`;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message);
console.log(message2);

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'abc123',
        username: 'el_papi23'
    }
}

const getUser2 = (): User => {
    return {
        uid: 'abc123',
        username: 'el_papi23'
    }
}

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);