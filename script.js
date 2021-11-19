let url = 'movies.json'
let contener = document.getElementById('allMovies')

fetch(url)
    .then(Response => Response.json())
    .then(data => {

        data.results.forEach(element => {
            console.log(element.original_title)
            console.log(element.id)
            console.log(element.poster_path)

            let film = element
            let myAffichage = `<div class=" film col-lg-3 ">
            <div class="row">
                <div class="affiche col">
            <img src="${film['poster_path']} "width="100%" height="100%" w
            alt="">
            </div>
            <div class="titreFilm   col-2 ">
                
                <h3>${film.original_title}</h3>
                <div class="synopsis ">
                    <p>${film.overview}</p>
                </div>
                <div class="stars  ">⭐️ ⭐️ ⭐️ ⭐️ ⭐️
</div>
                </div>
                </div>
            </div>
        </div>`

            contener.innerHTML += myAffichage
        });

    })