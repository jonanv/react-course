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

const useContext = ({ name, age, key, rank = 'Sin rango' }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank
    };
};

const { keyName, rank, user: { name: nameUser, age: ageUser } } = useContext(person);
// console.log(context);
console.log(keyName, rank, nameUser, ageUser);