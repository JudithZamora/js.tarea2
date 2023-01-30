const btnCierra= document.querySelector('#btn-cierra');
const btnAdelanta= document.querySelector('#btn-adelanta');
const btnRetrocede= document.querySelector('#btn-retocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagn = 0;

const abreLightbox = (event) =>{
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImgen = Array.from(imagenes).indexOf(event.target);
};
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});
btnCierra.addEventListener('click', ()=>{
    lightbox.style.display = 'none';
});

const adelantaImagen =() =>{
    if (indiceImagn === imagenes.length - 1){
        indiceImagn = -1;
    }
    imagenActiva.src = imagenes[indiceImagn + 1].src;
    indiceImagn++;
};
btnAdelanta.addEventListener('click', adelantaImagen);

const retrocedeImgen = () =>{
    imagenActiva.src = imagenes[indiceImagn - 1].src;
    indiceImagn--;
};
btnRetrocede.addEventListener('click', retrocedeImgen);

