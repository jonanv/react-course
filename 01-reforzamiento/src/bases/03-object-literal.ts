interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    zipCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipCode: '170002',
        city: 'New York'
    }
};

const spiderman: Person = {
    firstName: 'Piter',
    lastName: 'Parker',
    age: 22,
}

// const spiderman = structuredClone(ironman);

// spiderman.firstname = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.zipCode = '123009';
// spiderman.address.city = 'Manizales';

console.log(ironman, spiderman);