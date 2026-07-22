// // // // let str = "hello";
// // // // let arr = ['h', 'e', '1', '1', '0'];

// // const { use } = require("react");

// // // // // console.log(str.length);
// // // // // console.log(arr.length);

// // // // // console.log(str[0]);
// // // // // console.log(arr[0]);
  

// // // // // this is wrong 
// // // // // str.push('!');

// // // // // this is right 
// // // // str += '!';
// // // // console.log(str)
// // // // arr.push('5');
// // // // console.log(arr)



// // // // let str = "JavaScript";

// // // // let arr = str.split('');
// // // // // console.log(arr);

// // // // let theArr = ["c", "a", "t"];

// // // // let singleStr = theArr.join('');
// // // // console.log(singleStr)


// // // // let name = "  JavaScript";


// // // // let upperVersion = name.toUpperCase();
// // // // // console.log(upperVersion)

// // // // let lowerVersion = name.toLowerCase();
// // // // // console.log(lowerVersion)

// // // // // name.trim();
// // // // // console.log(name);

// // // // let trimmedName = name.trim();
// // // // console.log(trimmedName)


// // // // let sentence = "Learning JavaScript is fun!";

// // // // let usingSlice = sentence.slice(0, 9);
// // // // // console.log(usingSlice)

// // // // let negativeSlice = sentence.slice(-4);
// // // // console.log(negativeSlice)


// // // // let a = "Hello";
// // // // let b = "World";

// // // // let useConcat = a.concat(" ", b);
// // // // console.log(useConcat)


// // // // let add = a + " " + b;
// // // // console.log(add)

// // // // let add2 = `${a} ${b}`;
// // // // console.log(add2)




// // // let stringUse = "JavaScript";

// // // // // let reverseString = str.reverse();
// // // // // console.log(reverseString)

// // // // let useSplit = str.split(" ");
// // // // // console.log(useSplit)

// // // // let useJoin = str.join(str);
// // // // console.log(useJoin)

// // // let splitUse = stringUse.split('');
// // // console.log(splitUse)


// // // const reversedUse = splitUse.reverse();
// // // console.log(reversedUse)

// // // const joined = reversedUse.join('');
// // // console.log(joined)




// // // let student = {
// // //     name:"Alex",
// // //     age: 34,
// // //     grade: "GPA: 4.5",
// // //     isEnrolled: true,
// // // };

// // // // console.log(student);

// // // console.log(student.name);


// // // Object

// // // object is a important method in programming and our reail life . any product , device and many other thing need to dat stored in one place but every data are defferent . unlimited data stored in object in separetly. 


// // // let myLaptop = {
// // //     band:"HP",
// // //     model: "15 fd",
// // //     price: 67000,
// // //     made: 'Chaina',
// // //     storage: "512 Gb",
// // //     ram: "16 Gb",
// // //     core: "i5",

// // // },



// // // let car = {
// // //     brand: "Toyota",
// // //     model: "Corolla",
// // //     year: 2022,
// // // };


// // // // console.log(car.brand);
// // // // console.log(car["model"]);

// // // car["color"] = "blue";
// // // // console.log(car)

// // // car.year = 2023;
// // // console.log(car)


// // // let book = {
// // //     title:"The Hobbit",
// // //     author:"Tolkien",
// // //     pages: 310,
// // // }

// // // // delete book.pages
// // // // console.log(book)


// // // let getKeys = Object.keys(book);
// // // // console.log(getKeys)


// // // let allArray = Object.entries(book);
// // // // console.log(allArray)


// // let user = {
// //     username:"coder123",
// //     address:{
// //         city:"Austin",
// //         zip:"78701"
// //     }
// // }

// // // // console.log(user.address.city);

// // // // user.address.country = "Poland";

// // // // console.log(user);

// // // // delete user["address"]["zip"]
// // delete user.address.zip;
// // console.log(user)






// let scores = { math: 90, science: 85, art: 95};


// // for(let key in scores){
// //     console.log(key , ":" ,scores[key])
// // }

// let sum = 0;
// let count = 0;

// for(let key in scores){
//     sum += scores[key];
//     count++;
// }
// const average = sum / count;
//     console.log(average);

// console.log(sum)



let contact = {
    name:"Alex Johnson",
    email:"ALEX@EMAIL.COM",
    phone:"555-1234"
};

contact.email = contact.email.toLowerCase();


contact.hasId = true;
// console.log(converted)
// console.log(contact);

// for(let key in contact){
//     // console.log(key, ":" , contact[key])
// }

// contact.favoriteWord = ["apple", "oanfe", "gopi"];
// // console.log(contact)

// const oneMethod = contact.name.split("");

// // console.log("splited", oneMethod);

// const reversed = oneMethod.reverse();
// console.log("reversed", reversed);

// const final = reversed.join("");
// console.log("final:", final)



let checkMail = contact.email.includes("@email.com");
// console.log(checkMail)

contact.favorite = [];
contact.favorite.push("aple" , "asdf", "dfd");
console.log(contact)