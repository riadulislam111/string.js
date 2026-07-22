const commitment = 'I will work hard and will never give up.';
// reverse this = '.pu evig reven



const parts = commitment.split('');
const reverseParts = parts.reverse();
const reverseCommitment = reverseParts.join('')

// console.log(parts)
// console.log(reverseParts)
// console.log(reverseCommitment)

let reverseCom = '';
for(const letter of commitment) {
    reverseCom = reverseCom + letter;
    console.log(letter, '=>', reverseCom);
}
console.log(reverseCom)