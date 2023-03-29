const conteinter = document.getElementById('container');
const emaildelusuario = document.getElementById('correo') ;
const nombredelusuario = document.getElementById('usuario')
const usuamal = document.getElementById('usuariomal');
let numerid = 0;
let html="";


const main = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    localStorage.setItem("API", JSON.stringify(data))
    console.log(data);
    borrarUmal();


    data.forEach(datos => {
        const{username,email}=datos
        console.log(username);
        console.log(email);

        if(email == emaildelusuario.value && username == nombredelusuario.value){
            pantalla();
        }else{
            Umal();
        }
    });
    

}
function Umal(){

    html=`               
    <p class="text-red-800 ">El Usuario o el Email estan mal</p>
    `
    usuamal.innerHTML=html;
}

function pantalla(){
    html=` 
                            
    <div class="flex flex-col justify-center items-center text-4xl mt-[15rem]">
        <h1>¡Welcome!</h1>    


        <button class=" bg-purple-300 border border-2 border-black rounded mt-[3rem]" onclick="volver()">Volver a la pagina anterior</button>
    </div>

`
conteinter.innerHTML=html;

}

function borrarUmal(){

    html=``;
    usuamal.innerHTML=html;
}



function Noservice(){
    html=` 
                    
        <div class="flex flex-col justify-center items-center text-4xl mt-[10rem] w-[20rem] ml-[5rem]">
            <h1>Lo sentimos aun no tenemos habilitado el sistema de agregar nuevos usuarios</h1>   
            
            <button class=" bg-purple-300 border border-2 border-black rounded mt-[3rem]" onclick="volver()">Volver a la pagina anterior</button>
        </div>

    `

    conteinter.innerHTML=html;
}

function Noservice1(){
    html=` 
                    
        <div class="flex flex-col justify-center items-center text-4xl mt-[10rem] w-[20rem] ml-[5rem]">
            <h1>Lo sentimos aun no tenemos habilitado el sistema de recuperar contraseña</h1>   
            
            <button class=" bg-purple-300 border border-2 border-black rounded mt-[3rem]" onclick="volver()">Volver a la pagina anterior</button>
        </div>

    `

    conteinter.innerHTML=html;
}

function volver(){
    location.href ='index.html';
}

function facebook(){
    location.href ='https://es-la.facebook.com/';
}
function Linked(){
    location.href ='https://co.linkedin.com/';
}
function Google(){
    location.href ='https://google.com';
}

