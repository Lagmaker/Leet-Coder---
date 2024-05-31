
lox = console.log;

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function (x) {
        for(var i = functions.length; i > 0; i--) {
            x = functions[i-1](x);
        }
        return x;
    }
};


func_arr = [x => x + 1, x => 2 * x];
const fn = compose(func_arr);

lox("result: ", fn(4)) // 9








// var compose = function(functions) {
//     return function (x) {
//         let result = x;
//         reversed = functions.slice().reverse();
//         result = reversed.forEach(el => el(x));
//         return result;
//     }
// };






// return functions.slice().reverse().forEach(x => x = x(x))