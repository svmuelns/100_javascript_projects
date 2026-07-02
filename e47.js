/* 47. Use find() to get the first number > 10 from 
[4, 12, 8, 20]. */

let array = [4, 12, 8, 20];

function validator(array){
    return array > 10;
}

let result = array.find(validator);

console.log(result);

