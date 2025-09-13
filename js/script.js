const $ = (id) => document.getElementById(id);

/*
* arrays of objects demo
*/
const movies = [
    { name: 'Django Unchained', year: 2012 },
    { name: 'Inglourious Basterds', year: 2009 },
    { name: 'Jackie Brown', year: 1997 },
    { name: 'Kill Bill Vol.1', year: 2003 },
    { name: 'Kill Bill Vol.2', year: 2004 },
    { name: 'Once Upon a Time... in Hollywood', year: 2019 },
    { name: 'Pulp Fiction', year: 1994 },
    { name: 'Reservoir Dogs', year: 1992 },
    { name: 'The Hateful Eight', year: 2015 }
]

const n = 6;        // # 1-8 to change item in list
const a = movies[n];
const mDisplay = a.name +" ("+ a.year +")";
console.log(mDisplay);

$("movieDisplay").textContent = mDisplay;