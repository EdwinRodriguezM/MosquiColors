// Obtener el modal y los elementos dentro del modal
const videoModal = document.getElementById("videoModal");
const imageModal = document.getElementById("imageModal");
const modalVideo = document.getElementById("modalVideo");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelectorAll(".close");

// Función para abrir el modal con el video seleccionado
document.querySelectorAll('.video-item video').forEach(video => {
    video.addEventListener('click', () => {
        videoModal.style.display = "block";
        modalVideo.src = video.querySelector('source').src;
    });
});

// Función para abrir el modal con la imagen seleccionada
document.querySelectorAll('.media-item img').forEach(img => {
    img.addEventListener('click', () => {
        imageModal.style.display = "block";
        modalImage.src = img.src;
    });
});

// Función para cerrar el modal
closeModal.forEach(span => {
    span.addEventListener('click', () => {
        videoModal.style.display = "none";
        imageModal.style.display = "none";
        modalVideo.pause();  // Pausar el video cuando se cierra el modal
        modalVideo.src = ""; // Limpiar la fuente del video
        modalImage.src = ""; // Limpiar la fuente de la imagen
    });
});

// Cerrar el modal cuando se hace clic fuera del video o imagen
window.addEventListener('click', event => {
    if (event.target === videoModal || event.target === imageModal) {
        videoModal.style.display = "none";
        imageModal.style.display = "none";
        modalVideo.pause();  // Pausar el video
        modalVideo.src = ""; // Limpiar la fuente
        modalImage.src = ""; // Limpiar la fuente de la imagen
    }
});

window.onload = function() {
    document.getElementById('myModal').style.display = 'block'; // Esto mostrará el modal al cargar la página
};
