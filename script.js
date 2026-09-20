const seleccion=document.getElementById("figura");
const selectCuadrado=document.getElementById("bobesponja");
const selectTriangu=document.getElementById("patricio");
const resultado = document.getElementById('resultado');


//ocultar lo que no queremos 
selectFigura.addEventListener('change', () => {
    const valor = selectFigura.value;
    
    // Ocultar todo primero
    seccionCuadrado.classList.add('oculto');
    seccionTriangulo.classList.add('oculto');
    resultado.textContent = '';
   
    // Mostrar solo la sección seleccionada
    if (valor === 'cuadrado') {
        seccionCuadrado.classList.remove('oculto');
    } else if (valor === 'triangulo') {
        seccionTriangulo.classList.remove('oculto');
    }
});




function calcularcuadrado(){
    let lado= parseFloat(document.getElementById("laredoc").value);
    if (isNaN(lado) || lado<=0){
resultado.textContent = 'Ingresa un número válido.';
        return;
    }else{
        let area=lado*lado;
        resultado.textContent=`Área del cuadrado: ${area}`;
        
    }

}


function calcularTriangulo() {
    let baset = parseFloat(document.getElementById('baset').value);
    let alturat = parseFloat(document.getElementById('alturat').value);
    if (isNaN(baset) || isNaN(alturat) || baset <= 0 || alturat <= 0) {
        resultado.textContent = 'Ingresa valores válidos.';
        return;
    }
    let areat = (baset * alturat) / 2;
    resultado.textContent = `Área del triángulo: ${areat}`;
    
}


function calcularrectangulo() {
    let baserect = parseFloat(document.getElementById('baserect').value);
    let alturarec = parseFloat(document.getElementById('alturarec').value);
    if (isNaN(baserect) || isNaN(alturarec) || baserect <= 0 || alturarec <= 0) {
        resultado.textContent = 'Ingresa valores válidos.';
        return;
    }
    let arearect = (baserect * alturarec) ;
    resultado.textContent = `Área del rectangulo: ${arearect}`;
    

}

function calcularcirculo() {
    let radio = parseFloat(document.getElementById('radio').value);
    if (isNaN(radio) || radio <= 0) {
        resultado.textContent = 'Ingresa un número válido.';
        return;
    }
    let areacirc = Math.PI * radio * radio;
    resultado.textContent = `Área del círculo: ${areacirc}`;

}


function limpiar() {
    document.getElementById('laredoc').value = '';
    document.getElementById('baset').value = '';
    document.getElementById('alturat').value = '';
    document.getElementById('baserect').value = '';
    document.getElementById('alturarec').value = '';
    document.getElementById('radio').value = '';
    resultado.textContent = '';
}
