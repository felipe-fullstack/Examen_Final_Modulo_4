/*Variables Globales
var inputPrincipal;
var botonAgregar = document.querySelector(".boton-agregar");
var contenedor = document.querySelector(".container");
var nuevoDiv = document.createElement("div");

botonAgregar.addEventListener("click", () => {
    validarInput();
})

function validarInput() {
    inputPrincipal = document.querySelector(".input").value;
    if (inputPrincipal) {
        this.crearDiv();
        document.getElementsByClassName("input")[0].value = "";
    } else {
        alert("Ingrese una tarea");
    }
}

function crearDiv() {
    nuevoDiv.classList.add("item");
    contenedor.appendChild(nuevoDiv);
    crearInput();
    crearBtnEditar();
    crearBtnEliminar();
}

function crearInput() {
    var inputItem = document.createElement("input");
    inputItem.setAttribute("type", "text");
    inputItem.setAttribute("disabled", true);
    inputItem.classList.add("item-input");
    nuevoDiv.appendChild(inputItem);
    inputItem.value = document.querySelector(".input").value;
}

function crearBtnEditar() {
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
    botonEditar.classList.add("boton-editar");
    nuevoDiv.appendChild(botonEditar);
}
function crearBtnEliminar() {
    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
    botonRemover.classList.add("boton-remover");
    nuevoDiv.appendChild(botonRemover);
}*/

/***********AQUI EMPIEZA MI TRABAJO************/

//Variables Globales
var botonAgregar = document.querySelector(".boton-agregar");
var contenedor = document.querySelector(".container")
const $focusInputPrincipal = document.querySelector(".input");
var inputPrincipal;

//Alert de Bienvenida
alert("¡Bienvenidos! Agenda tus Tareas")

//foco al input principal
$focusInputPrincipal.focus()

//Boton agregar (+) Tarea para interactuar
botonAgregar.addEventListener("click", () => {
    validarInput();
})

//Valida el input principal, si contiene dato ejecuta, sino le pide al usuario que ingrese una Tarea
function validarInput() {
    inputPrincipal = document.querySelector(".input").value;
    if (inputPrincipal) {
        var objItem = new Item(inputPrincipal);
        objItem.crearContenedor(inputPrincipal);
        inputPrincipal = document.querySelector(".input").value = "";
        $focusInputPrincipal.focus()
    } else {
        alert("Ingrese una Tarea por favor")
        $focusInputPrincipal.focus()
    }
}

// Creación de la Clase Item
class Item {
    constructor(inputPrincipal) {
        this.inputPrincipal = inputPrincipal;
    };
    crearContenedor(tarea) {
        //Crear DIV
        var nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");

        //Agregar DIV al container
        contenedor.appendChild(nuevoDiv);

        //Crear elemento input
        var inputItem = document.createElement("input");
        inputItem.setAttribute("type", "text");
        inputItem.setAttribute("disabled", true);
        inputItem.classList.add("item-input");
        inputItem.value = tarea;

        //Crear boton editar
        var botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");
        botonEditar.setAttribute("id", "boton-editar");

        //Crear boton eliminar
        var botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        //Agregar elementos al DIV
        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);

        //Le damos vida al botón editar
        botonEditar.addEventListener("click", () => {
            if (inputItem.disabled == false) {
                inputItem.setAttribute("disabled", true);
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
                $focusInputPrincipal.focus()
            } else {
                inputItem.removeAttribute("disabled");
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
                inputItem.focus()
            }
        })

        //Le damos vida al botón Eliminar
        botonRemover.addEventListener("click", () => {
            nuevoDiv.removeChild(inputItem);
            nuevoDiv.removeChild(botonEditar);
            nuevoDiv.removeChild(botonRemover);
            $focusInputPrincipal.focus()
        })
    }
}


