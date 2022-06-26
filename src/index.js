import { getMusic } from "./api.js";

const nav_main_search_form = document.querySelector("#nav_main_search_form");
const search_button = document.querySelector("#search_button");
const error_message = document.querySelector("#nav_main_message");
const artist_name = document.querySelector("#artist_name");
const artist_name2 = document.querySelector("#artist_name2");
const presentation_image = document.querySelector("#presentation_image");
let items = [];

nav_main_search_form.addEventListener("submit", buscarcancion);

function buscarcancion(e) {
  e.preventDefault();
  results.innerHTML = "";
  const artista = document.querySelector("#input_search").value;

  if (artista === "") {
    //Muestra error
    error_message.classList.remove("none");

    setTimeout(() => {
      error_message.classList.add("none");
    }, 3000);

    return;
  }

  getMusic(artista).then(({ data: resultadosMusic }) => {
    console.log("Resultados", resultadosMusic);
    resultadosMusic.forEach((i) => {
      const rmi = document.createElement("div");
      const rmii = document.createElement("div");
      const img = document.createElement("img");
      const rmid = document.createElement("div");
      const rnid = document.createElement("div");
      const rnidt = document.createElement("div");
      const rnida = document.createElement("div");
      rmi.classList.add("results_main_item");
      rmii.classList.add("results_main_item_image");
      rmid.classList.add("results_name_item_description");
      rnidt.classList.add("results_name_item_description_tittle");
      rnida.classList.add("results_name_item_description_artist");

      img.setAttribute("music", i.preview);

      img.src = i.album.cover;
      rnidt.textContent = i.title;
      rnida.textContent = i.artist.name;

      rmii.appendChild(img);

      rmi.appendChild(rmii);
      rnid.appendChild(rnidt);
      rnid.appendChild(rnida);

      rmi.appendChild(rmii);
      rmi.appendChild(rnid);

      results.appendChild(rmi);
    });
    playMusic();
  });
}
const playMusic = () => {
  
  items = document.querySelectorAll(".results_main_item");
  items.forEach((i) => {
    i.addEventListener("click", function (e) {
      // const audioTemp = new Audio(e.target.getAttribute("music"));
      musica.src = e.target.getAttribute("music");
      musicaControls.load()
      musicaControls.play();

      // musica.src = e.target.getAttribute("music")
      // console.log("item", e.target.getAttribute("music"));
      // musicaControls.play()
    });
  });
};


volumeControl.addEventListener('input', (e) => {
    musicaControls.volume = e.target.value / 100;
})