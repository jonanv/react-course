const ironman = {
    firstname: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipCode: '170002',
        city: 'New York'
    }
};

const spiderman = structuredClone(ironman);

spiderman.firstname = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.zipCode = '123009';
spiderman.address.city = 'Manizales';

console.log(ironman, spiderman);