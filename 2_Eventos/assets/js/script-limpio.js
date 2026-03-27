// 1. Seleccionar elementos del DOM
const tareaInput = document.getElementById("tarea");
const formTarea = document.getElementById("formTarea");
const listaTareas = document.getElementById("listaTareas");
const botonAgregar = document.getElementById("botonAgregar");

// 2. Función para agregar nueva tarea a la lista desde el input
const crearTarea = (event) => {
  if (tareaInput.value.trim() !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaInput.value;
    nuevaTarea.classList.add("list-group-item");

    listaTareas.appendChild(nuevaTarea);

    event.target.reset();
  } else {
    alert("Debes agregar una tarea válida.");
  }
};

// ----- Opción 1: Funcionalidad para agregar tarea: evento "click" en el botón, sin form -----
// botonAgregar.addEventListener("click", () => {
//   crearTarea();
// });

// tareaInput.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     crearTarea();
//   }
// });

// ----- Opción 2: Funcionalidad para agregar tarea: Submit form -----
// El botón debe ser type = "submit"
formTarea.addEventListener("submit", (event) => {
  event.preventDefault();
  crearTarea(event);
});

// Eliminar tarea al hacer click en el <li>
listaTareas.addEventListener("click", (event) => {
  // console.log(event);
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
