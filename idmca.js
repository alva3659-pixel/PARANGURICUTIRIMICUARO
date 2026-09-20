const resultado = document.getElementById("resultado");
resultado.textContent = '';
let IMC;



function calcularidm() {
const nombre = document.getElementById("names").value;
const apell = document.getElementById("apell").value;
const sex = document.getElementById("sex").value;
const peso = parseFloat(document.getElementById("peso").value);
const altura = parseFloat(document.getElementById("altura").value);

    if (peso <= 0 || altura <= 0) {
        resultado.textContent = "El peso y la altura deben ser mayores que 0";
    } else {
       IMC = peso / (altura * altura);
       let k =IMC;
          // resultado.textContent=`NOMBRE: ${nombre} ${apell} \n SEXO: ${sex}  \n PESO: ${peso}  \n ESTATURA ${altura} \n Tu IMC ES : ${IMC} `;
    
    resultado.textContent = 
`================================
          TICKET IMC
================================

NOMBRE:    ${nombre} ${apell}
SEXO:      ${sex}
PESO:      ${peso} kg
ESTATURA:  ${altura} m

--------------------------------
          RESULTADO
--------------------------------

TU IMC ES: ${IMC}

================================`;
    
          verifica();
    }
}





function verifica() {
    if (IMC < 18.5) {
        resultado.textContent += 
        "\nBAJO PESO";
    } else if (IMC < 25) {
        resultado.textContent += 
        "\nPESO NORMAL";
    } else if (IMC < 30) {
        resultado.textContent += 
        "\nSOBRE PESO";
    } else if (IMC < 35) {
        resultado.textContent += 
        "\nOBESIDAD GRADO I";
    } else if (IMC < 40) {
        resultado.textContent += 
        "\nOBESIDAD GRADO II";
    } else {
        resultado.textContent += 
        "\nObESIDAD GRADO  III USTED ES UN MARRANO ";
    }
}

function limpiar() {
    document.getElementById('names').value = '';
    document.getElementById('apell').value = '';
    document.getElementById('sex').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    resultado.textContent = '';
}