const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = characterNames;

console.log({ p1, p2, p3 });

const [ , , t3 ] = characterNames;

console.log({ t3 });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(numbers + 100);


// TODO destructuring
// 1. función lambda
// 2. method reference
// 3. destructuring
// 4. as const

// const useState = (name: string) => [name, console.log] as const;

const useState = (name: string) => {
    return [
        name,
        (newName: string) => {
            console.log(newName);
        }
    ] as const;
} 

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"