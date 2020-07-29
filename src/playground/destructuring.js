// //Object destructuring

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}`);

const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`It is ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holidaty',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName = 'Self-Publisher'} = book.publisher;
console.log(publisherName);

//Array destructuring

const address = ['1299 $ Juniper Street', 'Philadephia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}`);

const item = ['coffee', '$2', '$2.5', '$2.75'];
const [name, ,mediumCost] = item;

console.log(`A medium ${name} costs ${mediumCost}`);