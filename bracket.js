const person = {
    name: 'tobarok lai',
    profession:'student',
    age: 31,
    isSingle: true,
    'home address': 'new khali',
    "parent:name" : 'kodom ali'
}

console.log(person['home address'])
console.log(person['parent:name'])

person['home address'] = 'Dhaka';
console.log(person)