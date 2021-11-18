
let url='movies.json'

fetch (url)
.then(Response => Response.json())
.then (data => {

data.results.forEach(element => {
 console.log(element.original_title) 
 console.log(element.id)
 console.log(element.poster_path)   
});

})
let allMovies = document.querySelector("allMovies")
let requestURL = url
let request = new XMLHttpRequest()
request.open ('GET', requestURL)
request.responseType = 'json'
request.send()
request.onload = function (){

    let movies = request.response

}