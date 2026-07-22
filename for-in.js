const numbers = [11, 22, 33, 44 ,55];

for(const number of numbers){
    // console.log(number)
}

const student = {
    name: 'akber mogol',
    id: 222,
    age: 23,
    favSubject: ['physis', 'math', 'chemistry']
}



// for ... of => array 
// for ... in => object

for(const key in student){
//    console.log(key)
   const value = student[key];
//    console.log(key, value)
}


const keys = Object.keys(student);
// console.log(keys)


for(const key of keys) {
    // console.log(key);
    const value = student[key];
    // console.log(key, value)
}


const student2 = {
    name: "hero",
    batch: 11,
    city:'Dhaka'
};

for(const key in student2) {
    console.log(key + "=" + student2[key])
}