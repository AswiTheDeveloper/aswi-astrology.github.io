import expressArray from "./data";

const calculator = (name) => {


    let expNumber = 0; //Expression Number
    name.forEach((letter, index) => {

        if (['A', 'I', 'J', 'Q', 'Y'].includes(letter)) expNumber += (1);
        if (['B', 'R', 'K'].includes(letter)) expNumber += (2);
        if (['C', 'G', 'L', 'S'].includes(letter)) expNumber += (3);
        if (['T', 'M', 'D'].includes(letter)) expNumber += (4);
        if (['X', 'N', 'H', 'E'].includes(letter)) expNumber += (5);
        if (['W', 'V', 'U'].includes(letter)) expNumber += (6);
        if (['Z', 'O'].includes(letter)) expNumber += (7);
        if (['P', 'F'].includes(letter)) expNumber += (8);
    });
    console.log(expNumber);
    return expNumber < 10 || expNumber == 11 || expNumber == 22 || expNumber == 33
        //except 11,22,33 master numbers, number greater than 10 converted into single number 23(2+3=5)
        ? expNumber
        : expNumber.toString().split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr));

}

const expressionNumber = (e) => {
    const name = e.toUpperCase().split('');
    let expNumber = calculator(name);
    expNumber = [11, 22, 33].includes(expNumber) ? expNumber : expNumber < 10
        ? expNumber
        : expNumber.toString().split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr));


    //Heart Desire number is calculated based on the Vowels
    let onlyVowels = name.filter((e) => ['A', 'E', 'I', 'O', 'U'].includes(e));
    let heartDesireNumber = calculator(onlyVowels);
    heartDesireNumber = [11, 22, 33].includes(heartDesireNumber) ? heartDesireNumber : heartDesireNumber < 10
        ? heartDesireNumber
        : heartDesireNumber.toString().split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr));


    return [expNumber, heartDesireNumber];
}


expressionNumber('oooa');


export default expressionNumber;