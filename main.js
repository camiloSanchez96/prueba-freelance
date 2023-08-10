// Defina un arreglo en JavaScript con 5 cadenas de texto, al cargar la página en un nodo h1 del
// DOM, asignar uno de estos valores, y al hacer click sobre el nodo, actualizar el contenido,
// cambiándolo por alguna de las cadenas de texto que se encuentran en el arreglo de forma
// aleatoria.

const element = document.querySelector('#nombre');
const elementContenedor = document.querySelector('#contenedor');
const elementPrimero = document.querySelector('#primero');
const elementSegundo = document.querySelector('#segundo');
const arrayTexto = [
  'primero',
  'segundo',
  'tercero',
  'cuarto',
  'quinto',
]

element.innerHTML = arrayTexto[1];
element.addEventListener('click', () => {
  element.innerHTML = arrayTexto[Math.floor(Math.random() * 5)];
});

// Defina la función separar, la cual recibirá una cadena de texto como parámetro y retorna la
// misma cadena, pero con cada carácter separado por un espacio.
// Ejemplo:
// separar(‘cadena’)
// ‘c a d e n a’

elementPrimero.innerHTML = separar("cadena");

function separar(cadenaTexto) {
  return cadenaTexto.split('').join(' ');
}

// Ahora haga que la función separar se pueda aplicar directamente a la cadena de texto, así:
// ‘cadena’.separar()
String.prototype.separar = function () {
  return this.split('').join(' ');
};

const cadena = 'cadena';
elementSegundo.innerHTML = cadena.separar();


// Usando la API de JSONPlaceholder ‘http://jsonplaceholder.typicode.com/’, listar en una página
// HTML 100 posts con título y contenido.

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const ul = document.createElement('ul');
    data.forEach(element => {
      const li = document.createElement('li');
      li.textContent = `Title: ${element.title} \n`;
      ul.appendChild(li);
      const liBody = document.createElement('li');
      liBody.textContent = `Body: ${element.body} \n`;
      ul.appendChild(liBody);
    });

    elementContenedor.appendChild(ul);
  })
  .catch(error => {
    console.error(error);
  });


// Agregar un menú lateral desplegable usando únicamente CSS, simulando el que se presenta a
// continuación.
document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("btn_close").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side");
var body = document.getElementById("body");

function open_close_menu() {
  side_menu.classList.toggle("menu__side_move");
}