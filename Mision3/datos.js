submit.addEventListener("click", guardardatos)

function guardardatos(){

    let nombre1 = document.getElementById('nombre').value;
    let apellidos1 = document.getElementById('apellidos').value;
    let area1 = document.getElementById('area').value;
    let usuario1 = document.getElementById('usuario').value;
    let edad1 = document.getElementById('edad').value;
    let direccion1 = document.getElementById('direccion').value;
    let email1 = document.getElementById('email').value;

    let nombcom = nombre1 + " " + apellidos1;

    let nuevoUsuario =[{"nombrecompleto":nombcom,"area":area1,"usuario":usuario1,"edad":edad1,"email":email1}]

    
        if(nombre1=="" || apellidos1=="" || area1=="" || usuario1=="" || edad1=="" || direccion1=="" || email1==""){
            alert("Un valor esta vacio rellenelo para continuar")
        }else{


            localStorage.setItem(localStorage.length, JSON.stringify(nuevoUsuario));

            location.href ='./index.html'
        }

    

}

