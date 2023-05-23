var arrNombresGastos =[];
var arrNombresGastosEliminar = [];
var arrCantidadGastos=[];
var arrCantidadGastosEliminar = [];



sumarGastos = () =>{
    let gastosSumados=0;

    for(let i=0; i<arrCantidadGastos.length;i++){
        gastosSumados = gastosSumados + arrCantidadGastos[i];
    }
    return gastosSumados;
}




muestroPresup = () =>{
    let inputCalcular = document.getElementById('inputCalc').value;
    let cajaPresupuesto = document.getElementById('pPresupuesto');
    let peso = document.createElement('span');
    peso.innerText = '$';
    cajaPresupuesto.appendChild(peso);
    cajaPresupuesto.innerText = inputCalcular;
}


buttonIcon = (indice) => {

     arrNombresGastosEliminar =[];
     arrCantidadGastosEliminar=[];
     console.log(indice);
    
    arrNombresGastos.splice(indice,1);
    arrCantidadGastos.splice(indice,1);

    console.log(arrNombresGastos);
    console.log(arrCantidadGastos);

    eliminarContenido();

    for(let i = 0; i<arrNombresGastos.length; i++){
        arrNombresGastosEliminar.push(arrNombresGastos[i]);
        arrCantidadGastosEliminar.push(arrCantidadGastos[i]);

        
    }
    console.log('arrayNombreGastosEliminar: ',arrNombresGastosEliminar);
    console.log('arrCantidadGastosEliminar:', arrCantidadGastosEliminar);

    let pGastos = document.getElementById('pGastos');
    let pSaldo = document.getElementById('pSaldo');
    let cajaPresupuesto = document.getElementById('pPresupuesto').innerText;
    let acumulado = 0;

    for(let i = 0; i<arrCantidadGastos.length; i++){
        acumulado = acumulado + arrCantidadGastos[i];
    }

    pGastos.innerText = acumulado;

    let elSaldo = parseFloat(cajaPresupuesto) - parseFloat(acumulado);
    pSaldo.innerText = elSaldo;

    pintarGastosEliminar()
}


eliminarContenido = () => {
    let bodyTabla = document.getElementById('bodyTabla');

    bodyTabla.innerText = '';
}



pintarGastosEliminar = () =>{
    let tablaBody = document.getElementById('bodyTabla');
    let limiteEliminar = arrNombresGastosEliminar.length;
    console.log('limite eliminar:', limiteEliminar);




    for(let j = 0; j<limiteEliminar; j++){
    let unTrNuevo = document.createElement('tr');

    let unThNuevo = document.createElement('th');
    unThNuevo.scope = 'row';
    unThNuevo.innerText = '*';
    let unTdNuevo = document.createElement('td')
    
    let segundoTdNuevo = document.createElement('td');

    
    let tercerTdNuevo = document.createElement('td');   

    console.log([j]);

    unTdNuevo.innerText = arrNombresGastosEliminar[j];
    console.log('arrNombresGastosEliminar[j]:', arrNombresGastosEliminar[j]);

    segundoTdNuevo.innerText = arrCantidadGastosEliminar[j];

    
    tercerTdNuevo.classList.add('bi');
    tercerTdNuevo.classList.add('bi-trash');
    tercerTdNuevo.setAttribute('type', 'button');
    tablaBody.appendChild(unTrNuevo);
    unTrNuevo.appendChild(unThNuevo);
    unTrNuevo.appendChild(unTdNuevo);
    unTrNuevo.appendChild(segundoTdNuevo);
    unTrNuevo.appendChild(tercerTdNuevo);
        
    tercerTdNuevo.setAttribute('onClick', `buttonIcon(${j})`);
    }

}





pintarGastos = () =>{
    let tableBody = document.getElementById('bodyTabla');
   

    let unTrNuevo = document.createElement('tr');

    let unThNuevo = document.createElement('th');
    unThNuevo.scope = 'row';
    unThNuevo.innerText = '*';
    let unTdNuevo = document.createElement('td')
    
    let segundoTdNuevo = document.createElement('td');

    
    let tercerTdNuevo = document.createElement('td');
    tercerTdNuevo.classList.add('bi');
    tercerTdNuevo.classList.add('bi-trash');
    tercerTdNuevo.setAttribute('type', 'button');
    


    for(let i=0; i<arrNombresGastos.length; i++){

        unTdNuevo.innerText = arrNombresGastos[i];
   
        segundoTdNuevo.innerText = arrCantidadGastos[i];

        tableBody.appendChild(unTrNuevo);
        unTrNuevo.appendChild(unThNuevo);
        unTrNuevo.appendChild(unTdNuevo);
        unTrNuevo.appendChild(segundoTdNuevo);
        unTrNuevo.appendChild(tercerTdNuevo);
        
        tercerTdNuevo.setAttribute('onClick', `buttonIcon(${i})`);
    }

}




muestroNombGasto = () =>{
    let inputNombGasto = document.getElementById('nombreGasto').value;
    let inputValorGasto = document.getElementById('valorGasto').value;

    arrNombresGastos.push(inputNombGasto);
    arrCantidadGastos.push(parseFloat(inputValorGasto));

    console.log('arreglo gastos:');
    console.log(arrNombresGastos);
    console.log('cantidad gastos:');
    console.log(arrCantidadGastos);
 
    let creoVarParaFuncion = sumarGastos();
    console.log(creoVarParaFuncion);

    let cajaPresupuesto = document.getElementById('pPresupuesto').innerText;
    let cajaGasto = document.getElementById('pGastos');
    let cajaSaldo = document.getElementById('pSaldo');

    cajaGasto.innerText = creoVarParaFuncion;
    
    let saldo = parseFloat(cajaPresupuesto) - parseFloat(creoVarParaFuncion);

    cajaSaldo.innerText = saldo;

    pintarGastos();
}



activoEventos = () =>{
    let btnCalcular = document.getElementById('calcular');
    btnCalcular.addEventListener('click', muestroPresup);

    let btnNombGasto = document.getElementById('btnGasto');
    btnNombGasto.addEventListener('click', muestroNombGasto);

    
}
































