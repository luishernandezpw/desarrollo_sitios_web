document.addEventListener('DOMContentLoaded', e=>{
    generarTablaMultiplicar();
});

function generarTablaMultiplicar(){
    btnMostrarTabla.addEventListener('click', e=>{
        let ntabla = parseInt(txtNumTabla.value), 
            respuesta = `TABLA DE MULTIPLICAR DEL ${ntabla}<br><br>`;
        for(let i=1; i<=10; i++){
            respuesta += `${ntabla} x ${i} = ${ntabla*i}<br>`;
        }
        dvRespuesta.innerHTML = respuesta;
    });
}