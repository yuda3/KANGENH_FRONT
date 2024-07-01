const array = [1,2,3,4,5];

array.reduce(function (accumulator, currentValue) {
    console.log(accumulator, currentValue);
    // return accumulator * currentValue;
},10)

const str= 'animation';
const strArray = str.split('');

console.log(strArray);

const result = strArray.reduce((accumulator, currentValue) => {
    return accumulator + '<' + currentValue + '>';
}, '')

console.log(result);