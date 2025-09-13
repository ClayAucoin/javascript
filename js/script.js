const $ = (id) => document.getElementById(id);

/*
* arrays of objects demo
*/
const MOVIES = [
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

/*
* choose movie number to show
*/
const n = 6;        // # 1-8 to change item in list
const a = MOVIES[n];
const mDisplay = a.name + " (" + a.year + ")";
console.log(mDisplay);

$("movieDisplay").textContent = mDisplay;

/*
* list movies in li 
*/
function listMovies_forEach() {
    MOVIES.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.name} (${movie.year})`;
        $("movieListforEach").appendChild(li);
    });
}
listMovies_forEach();

/*
* list movies in li using map()
*/
function listMovies_map() {
    // Create one big string of <li> items
    const createHTML = MOVIES.map(movie => `<li>${movie.name} (${movie.year})</li>`).join("");

    // Inject into the <ul>
    $("movieListmap").innerHTML = createHTML;
}
listMovies_map();