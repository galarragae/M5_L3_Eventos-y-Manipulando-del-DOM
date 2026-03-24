// 1. Seleccionar elementos del DOM
const tareaInput = document.getElementById("tarea");
const formTarea = document.getElementById("formTarea");
const listaTareas = document.getElementById("listaTareas");
const botonAgregar = document.getElementById("botonAgregar");

// 2. Función para agregar nueva tarea a la lista desde el input
const crearTarea = () => {
  // Verificar si el imput tiene contenido para agregarlo a la lista
  if (tareaInput.value.trim() !== "") {
    // Crear un nuevo elemento <li>
    const nuevaTarea = document.createElement("li");
    // Asignarle el texto que fue capturado en el input del form
    nuevaTarea.textContent = tareaInput.value;
    nuevaTarea.classList.add("list-group-item");

    // Agregar elemento al DOM (dentro de la <ul> #listaTareas)
    listaTareas.appendChild(nuevaTarea);

    // Limpiar input para escribir la siguiente tarea
    tareaInput.value = "";
  } else {
    alert("Debes agregar una tarea válida.");
  }
};

// Funcionalidad para agregar tarea con evento "click"
botonAgregar.addEventListener("click", () => {
  crearTarea();
});

// Funcionalidad para agregar tarea con botón Enter
tareaInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // // Aunque el botón sea type="button", la tecla Enter aún hace que se intente enviar el formulario
    // // Se usa preventDefault dentro del if para que sólo pase con la tecla Enter y poder seguir escribiendo en el input
    event.preventDefault();
    crearTarea();
  }
});

// formTarea.addEventListener('submit', ()=>{

// })
