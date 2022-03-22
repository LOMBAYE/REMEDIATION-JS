const img = document.getElementById('img')
const title = document.querySelector('.title')
const overview = document.querySelector('.overview')
const rate = document.querySelector('rate')
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// fetch(APIURL)
//     .then(response => { return response.json() })
//     .then(data => {
//         let image = IMGPATH + data.results[0].poster_path;
//         let title = data.results[0].title;
//         let overview = data.results[0].overview;
//         let rate = data.results[0].vote_average;
//         console.log(title, overview, rate)
//         img.src = image;
//         title.innerHTML = title
//         return image;
//     })
downloadMovie(APIURL)

function downloadMovie(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
}
const container = document.querySelector('.container')
const form = document.querySelector('form')
const input = document.querySelector('input')

function showMovies(data) {
    container.innerHTML = '';
    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('film')
        movieEl.innerHTML = `
        <img src="${IMGPATH +poster_path}" alt="${title}" class="img" id="img">
            <div class="info">
                <h3 class="title">${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                    ${overview}
            </div>
        `
        container.appendChild(movieEl);

    })
}

function getColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const recherche = input.value;
    console.log(recherche);
    if (recherche) {
        downloadMovie(SEARCHAPI + recherche)
    }
})