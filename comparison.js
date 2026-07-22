const subject = 'chemistry';
const book = 'Chemistry';


// console.log(book.toLowerCase());

// if(subject.toLowerCase() === book.toLowerCase()) {
//     console.log('Poira poira fatai felbo')
// }
// else{
//     console.log('Aibar ki auto pass ase!!!!')
// }


const emailUserProvided = 'goni@mia.com';
const emailSavedInDatabase = 'goniMia@mia.xom';

// if(emailUserProvided.toLowerCase() === emailSavedInDatabase.toLowerCase()){
//     console.log('valid')
// }

// console.log(emailUserProvided.trim())
console.log(emailUserProvided.trimStart().trimEnd())



if(emailUserProvided === emailSavedInDatabase){
    console.log('welcome to the website')
}