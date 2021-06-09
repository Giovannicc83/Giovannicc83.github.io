const btnBuscar = document.querySelector('#buscar');
const inputPelicula = document.querySelector('#pelicula');
const APIKEY = 'a286acd9111e07463b1f116347e9ef78'; 
const contenedorPeliculas = document.querySelector('#contenedorPeliculas');


btnBuscar.addEventListener('click', function(event){
    event.preventDefault();
    const pelicula = inputPelicula.value;
    cargarPeliculas(pelicula);
    
    });
    


const cargarPeliculas = (pelicula) =>{
    contenedorPeliculas.innerHTML = '';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${pelicula}`;
    fetch(url).then(respuesta => respuesta.json() ).then(datos => {
        
        for(let i = 0; i < datos.results.length; i++){
            let datosPelicula = datos.results[i];
            console.log(datosPelicula);
            const peliculaDiv = document.createElement('div');
            peliculaDiv.classList.add('pelicula');
            let portadaPelicula = `http://image.tmdb.org/t/p/original${datosPelicula.poster_path}`;
            const peliculaHTML = `
            <div class="imgContenedor">
                <img src="${portadaPelicula}">
            </div>
            <div class="informacion">
                <p class="titulo">${datosPelicula.original_title}</p>
                <h3 class="votacion">Puntuacion: ${datosPelicula.vote_average} </h3>
                <h4 class="fecha">Fecha: ${datosPelicula.release_date} </h4>
            </div>
            `;

            peliculaDiv.innerHTML = peliculaHTML;
            contenedorPeliculas.appendChild(peliculaDiv);
        }
    })
}


