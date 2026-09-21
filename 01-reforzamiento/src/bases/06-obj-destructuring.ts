const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const name = person.name;
// console.log(name);

const { name, age, key } = person;
console.log(name);
console.log(age);
console.log(key);

interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank
    };
};

const context = useContext(person);
console.log(context);