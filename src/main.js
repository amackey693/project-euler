// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
// import $ from "jquery";
// https://projecteuler.net/problem=1
const number = 1001;
const list = [...Array(number - 1).keys()].map(e => e + 1);

const multiples = list.filter(e => (e % 3 === 0) || (e % 5 === 0));

const addMultiples = multiples.reduce((c, n) => c + n, 0); 

