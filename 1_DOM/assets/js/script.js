// ==================================================================================================
// I. ACCEDIENDO A ELEMENTOS
// ==================================================================================================

//
// 1. Capturar un elemento por su ID  --> getElementById
// ======================================================

const titulo = document.getElementById("titulo");
console.log(titulo); // muestra el elemento HTML completo

// titulo: elemento. textContent: propiedad.
console.log("Contenido de texto del elemento: ", titulo.textContent); // Muestra el contenido de texto del título

titulo.textContent = "Título cambiado desde JS"; // Se reasigna el nuevo título cambiado desde este script JS

//
// 2. Capturar un elemento por su clase  --> getElementsByClassName
// =================================================================

// https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild

// ---------- Accediendo a la sección de párrafos por CLASE ----------

const parrafos = document.getElementsByClassName("descripcion");
console.log(parrafos); // devuelve colección de elementos (parecido a un array)
console.log(parrafos[0]); // devuelve el primer elemento
console.log(parrafos[parrafos.length - 1]); // devuelve el último elemento de la sección párrafos

// ---------- Accediendo a la sección de párrafos por ID (padre) ----------
const seccionParrafos = document.getElementById("seccion-parrafos");
console.log(seccionParrafos.firstElementChild); // devuelve el primer elemento
console.log(seccionParrafos.lastElementChild); // otra alternativa para acceder al último elemento (.lastElementChild)

// ---------- Accediendo a los siblings ----------
const primerParrafo = seccionParrafos.firstChild;
console.log(primerParrafo.nextElementSibling); // devuelve el siguiente sibling

// ---------- Creando un array de párrafos ara tener acceso a métodos de arrays ----------
const arrayParrafos = [...parrafos];
console.log(arrayParrafos); // muestra todos los párrafos como un array

//
// 3. Capturar un elemento por un selector sintaxis CSS
// =====================================================

const parrafoClase = document.querySelector(".descripcion");
console.log(parrafoClase); // Este es un párrafo (devuelve la primera coincidencia con esa clase)

const cuartoParrafo = document.querySelector(".descripcion:nth-child(4)");
console.log(cuartoParrafo); // Lorem 3 (4to párrafo) con la clase .descripcion

// .querySelectorAll devuelve una lista de nodos (array-like): es como un array, pero NO es un array
const parrafosClase = document.querySelectorAll(".descripcion");
parrafosClase.forEach((p) => console.log("Con querySelectorAll", p));

//
// 4. Capturar un elemento por un etiquetas --> getElementsByTagName (devuelve una colección de elementos HTML)
// ============================================================================================================

const listItems = document.getElementsByTagName("li");
console.log(listItems);

//
// =================================================================================================================
// II. MODIFICANDO ELEMENTOS
// =================================================================================================================

//
// 1. textContent
// ============================

cuartoParrafo.textContent = "Párrafo modificado desde JS";

//
// 2. innerHTML
// =============================

const divResultado = document.getElementById("resultado");
divResultado.innerHTML = `
  <h2>Usando innerHTML</h2>
  <ol>
    <li>Elemento de lista 1</li>
    <li>Elemento de lista 2</li>
    <li>Elemento de lista 3</li>
    <li>Elemento de lista 4</li>
    <li>Elemento de lista 5</li>
  </ol>`;

//
// =================================================================================================================
// III. MODIFICANDO ATRIBUTOS (class, src, href, etc.)
// =================================================================================================================

// atributo.propiedad
// atributo style (CSS) y propiedades: background color, padding, etc
titulo.style.backgroundColor = "black";
titulo.style.color = "white";
titulo.style.borderRadius = "5px";
titulo.style.padding = "8px";

// .classList --> propiedad
const modificarAttr = document.getElementById("modificar-atributos");
modificarAttr.classList.add("bg-dark", "text-white");

cuartoParrafo.classList.remove("text-muted");
titulo.classList.toggle("display-1");

const enlace = document.querySelector("a");
enlace.href = "https://developer.mozilla.org/"; // Una forma de hacerlo
console.log(enlace.getAttribute("href"));

enlace.setAttribute("href", "https://www.google.com"); // Agregando el atributo href de otra forma
enlace.setAttribute("target", "_blank");

//
// =================================================================================================================
// IV. CREAR ELEMENTOS
// =================================================================================================================

// createElement, add, appendChild ----> métodos
// (class, src, href, etc.) ---> atributos

const nuevoDiv = document.createElement("div");

nuevoDiv.classList.add("bg-primary", "text-center", "text-light");
// nuevoDiv.style.height = "100px";

const contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoDiv);

const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText =
  "Este párrafo es hijo de nuevoDiv y nieto de contenedor. Y fue creado con document.createElement";
nuevoDiv.appendChild(nuevoParrafo);

//
// =================================================================================================================
// IV. ELIMINAR ELEMENTOS
// =================================================================================================================

const seElimina = document.createElement("div"); // se crea el párrafo
contenedor.appendChild(seElimina); // para agregarlo al HTML como hijo del #contenedor

seElimina.classList.add("text-center");
seElimina.style.backgroundColor = "pink";
seElimina.innerText = "Este párrafo se va a eliminar";

// seElimina.remove();  // se elimina el elemento selecto
contenedor.removeChild(seElimina); // se elimina sólo el hijo selecto del #contenedor