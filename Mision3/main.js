let nombrec = localStorage.getItem("nombre");
let area1 = localStorage.getItem("area");
let usuario1 = localStorage.getItem("usuario");
let edad1 = localStorage.getItem("edad");
let direccion1 = localStorage.getItem("direccion");
let email1 = localStorage.getItem("email");
const dts = document.getElementById('datos')
const docent = [];
let arreglo=[];
let html="";
let i=0;

console.log(nombrec);
console.log(area1);
console.log(usuario1);
console.log(edad1);
console.log(direccion1);
console.log(email1);



arreglo.push(nombrec,area1,usuario1,edad1,direccion1,email1,i);
console.log(arreglo);
i++;

if(area1=="Docencia"){
    html=`
    <th rowspan="3" class="">${arreglo[1]}</th>
    <td class="">${arreglo[0]}</td>
    <td class="">${arreglo[2]}</td>
    <td class="">${arreglo[5]}</td>
    <td class="">${arreglo[3]}</td>
    `
    dts.innerHTML+=html;
    console.log("1 " + arreglo);

}else if(area1=="Tecnologia"){
    html=`
    <th rowspan="3" class="">${arreglo[1]}</th>
    <td  class="">${arreglo[0]}</td>
    <td  class="">${arreglo[2]}</td>
    <td  class="">${arreglo[5]}</td>
    <td  class="">${arreglo[3]}</td>
 
    `
    dts.innerHTML+=html;

}else if(area1=="Marketing"){
    html=`
    <th rowspan="3" class="">${arreglo[1]}</th>
    <td  class="">${arreglo[0]}</td>
    <td   class="">${arreglo[2]}</td>
    <td  class="">${arreglo[5]}</td>
    <td  class="">${arreglo[3]}</td>
    `
    dts.innerHTML+=html;

}