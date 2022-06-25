
const nav_main_search_form = document.querySelector('#nav_main_search_form');
const search_button = document.querySelector('#search_button')
const error_message = document.querySelector('#nav_main_message')
const artist_name = document.querySelector('#artist_name')
const artist_name2 = document.querySelector('#artist_name2')
const presentation_image = document.querySelector('#presentation_image')
nav_main_search_form.addEventListener('submit', buscarcancion)

function buscarcancion(e){
    e.preventDefault();
    const artista = document.querySelector('#input_search').value

    if(artista === ''){
        //Muestra error
        error_message.classList.remove('none')

        setTimeout(() => {
            error_message.classList.add('none')
        },3000)
        
        return
    }

    class API {
            token = '59f4081f5emshe5eef313607984ap1c3fa5jsnf51594987541';
            API = 'https://api.deezer.com'
            options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '59f4081f5emshe5eef313607984ap1c3fa5jsnf51594987541',
                'X-RapidAPI-Host': 'https://api.deezer.com'
                
            }
        }
        /* constructor(cancion){
            this.cancion = cancion
        } */

        getArtists(artista){
            //const url = `https://api.deezer.com/${this.cancion}/27` 
            //access_token=frM9mL0Rvqb1rKNlEjHKXEVJa1tOmWh5AgzPs6cuuNIUoCSMnmI&expires=3600
            /* const token = 'frM9mL0Rvqb1rKNlEjHKXEVJa1tOmWh5AgzPs6cuuNIUoCSMnmI'
            const url = `https://api.deezer.com/album/${this.cancion}
            ` */
            /* const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '59f4081f5emshe5eef313607984ap1c3fa5jsnf51594987541',
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            }; https://deezerdevs-deezer.p.rapidapi.com/artist/${this.cancion}
             */
            fetch(`${this.API}/artist/${artista}`, {mode: 'no-cors', headers: this.options})
                .then(response => response.json())
                .then(data => {
                    if(data.cod === "404"){
                        showError('Busqueda no encontrada')
                        return
                    }

                    showSongs(data)
                })
                .catch(err => console.error(err));
        }
    }

    function showSongs(data){
        const {name, picture, picture_big, tracklist} = data
        console.log(data)
        artist_name.textContent = name
        artist_name2.textContent = name
        presentation_image.src = `${picture_big}`
        nameSong.textContent = name;
        smallImage.src = `${picture}`
    }
    function getAlbum(data){

    }
    //Consultado API

    const search = new API();
    search.getArtists(artista)
}

