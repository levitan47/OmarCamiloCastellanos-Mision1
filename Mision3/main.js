let datoscompletos = localStorage.getItem("nombre");

const dts = document.getElementById('datos')
const docent = [];
let arreglo=[];
let html="";
let j = 0


for (j; j < localStorage.length; j++) {
    var z = JSON.parse(localStorage.getItem(j))
    console.log(z);

    html=`

        <tr class="flex justify-center text-center">
            <th  class="flex flex-grow">
                <p>${z[0]["area"]}</p>
            </th>
            <td  class="flex flex-grow">
                <p>${z[0]["nombrecompleto"]}</p>
            </td>
            <td  class="flex flex-grow">
                <p>${z[0]["usuario"]}</p>
            </td>
            <td  class="flex flex-grow">
                <p>${z[0]["email"]}</p>
            </td>
            <td  class="flex flex-grow">
                <p>${z[0]["edad"]}</p>
            </td>
        </tr>

    `
    dts.innerHTML+=html;


}