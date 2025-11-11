// Array to store movie names
let movies = [];

// Get elements
const movieInput = document.getElementById('movieInput');
const addMovieBtn = document.getElementById('addMovieBtn');
const clearListBtn = document.getElementById('clearListBtn');
const movieList = document.getElementById('movieList');
const movieCount = document.getElementById('movieCount');

// Function to update displayed list
function updateMovieList() {
    movieList.innerHTML = '';
    movies.forEach((movie, index) => {
        const li = document.createElement('li');
        li.textContent = movie;
        li.addEventListener('click', () => removeMovie(index));
        movieList.appendChild(li);
    });
    movieCount.textContent = `Total Movies: ${movies.length}`;
}

// Add movie
function addMovie() {
    const movieName = movieInput.value.trim();
    if (movieName === '') return alert('Please enter a movie name!');
    movies.push(movieName);
    movieInput.value = '';
    updateMovieList();
}

// Remove movie
function removeMovie(index) {
    movies.splice(index, 1);
    updateMovieList();
}

// Clear list
function clearList() {
    if (movies.length === 0) return;
    if (confirm('Are you sure you want to clear the list?')) {
        movies = [];
        updateMovieList();
    }
}

// Event listeners
addMovieBtn.addEventListener('click', addMovie);
clearListBtn.addEventListener('click', clearList);
movieInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addMovie();
});
