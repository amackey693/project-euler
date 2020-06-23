// // import 'bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './styles.css';
// // import $ from "jquery";

// // https://projecteuler.net/problem=1
// // Original Methods for solving problem ^
// const number = 1001;
// const list = [...Array(number - 1).keys()].map(e => e + 1);
// const multiples = list.filter(e => (e % 3 === 0) || (e % 5 === 0));
// const addMultiples = multiples.reduce((c, n) => c + n, 0); 

// Using Closure/Currying to solve problem: 
export const addMultiples = (numberCountTo) => {
  return () => {
    const list = [...Array(numberCountTo - 1).keys()].map(e => e + 1);
    return (x, y) => {
      const multiples = list.filter(e => (e % x === 0) || (e % y === 0));
      return () => {
        return multiples.reduce((c, n) => c + n, 0); 
      }
    }
  }
}


// https://projecteuler.net/problem=2

// const numbers = [...Array(10).keys()]
// const fibonacciNumbers = (numbers.reverse).map()
// .unshift()


export function getFibSum(number) {
  const getFibs = (number) => {
    let fibs = [];
    for(let i = 0; i < number; i++) {
      if ( i < 2) {
        fibs[i] = 1;
      } else {
        const newNum = fibs[i-1] + fibs[i-2];
        if(newNum < 4000000) {
          fibs[i] = newNum;
        } else {
          break;
        }
      }
    }
    return fibs;
  }

  const fibonacciNumbers = getFibs(number);
  const even = fibonacciNumbers.filter(n => (n % 2 === 0))
  const addEvens = even.reduce((c, n) => c + n, 0);
  return addEvens;

}


// const nums = Array(10).fill(1);

// const fibs = nums.map(function(val, i, nums) {
//   if(i > 2) {
//   return (nums[i-1] + nums[i-2]);
//   } else
//   return val;
// })

// const 