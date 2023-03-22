

console.log("hola");

submit.addEventListener("submit", guardardatos)

function guardardatos(){

    console.log("hola1");

    let nombre1 = document.getElementById('nombre').value;
    let apellidos1 = document.getElementById('apellidos').value;
    let area1 = document.getElementById('area').value;
    let usuario1 = document.getElementById('usuario').value;
    let edad1 = document.getElementById('edad').value;
    let direccion1 = document.getElementById('direccion').value;
    let email1 = document.getElementById('email').value;
    
    let nombrecompleto = nombre1 + " " + apellidos1;



        localStorage.setItem("nombre", nombrecompleto);
        localStorage.setItem("area", area1);
        localStorage.setItem("usuario", usuario1);
        localStorage.setItem("edad", edad1);
        localStorage.setItem("direccion", direccion1);
        localStorage.setItem("email", email1); 

    
        if(nombre1=="" || apellidos1=="" || area1=="" || usuario1=="" || edad1=="" || direccion1=="" || email1==""){
            alert("Un valor esta vacio rellenelo para continuar")
        }else{
            location.href ='http://127.0.0.1:5500/index.html'
        }

    

}

