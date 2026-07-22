const person = {
    name: 'tobarok lai',
    profession:'student',
    age: 31,
    isSingle: true,

}


delete person.isSingle;
delete person['age']
const keys = Object.keys(person);
console.log(keys)

const value = Object.values(person);
console.log(value)

console.log(Object.entries(person))