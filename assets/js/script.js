var arrNombresGastos =[];
var arrCantidadGastos=[];
var arrRowTablas=[];


function sumarGastos(){
    let gastosSumados=0;
    // recorre el arreglo de cantidad Gastos y suma su contenido
    for(let i=0; i<arrCantidadGastos.length;i++){
        gastosSumados = gastosSumados + arrCantidadGastos[i];
    }
    return gastosSumados;
}




function muestroPresup(){
    let inputCalcular = document.getElementById('inputCalc').value;
    let cajaPresupuesto = document.getElementById('pPresupuesto');
    let peso = document.createElement('span');
    peso.innerText = '$';
    cajaPresupuesto.appendChild(peso);
    cajaPresupuesto.innerText = inputCalcular;
}


function buttonIcon(){
    
    
    let tableBody = document.getElementById('bodyTabla');
    tableBody.removeChild();
}


// aqui voy, estoy pasando los datos al arreglo para poder eliminar el ultimo dato y se elimine de la tabla

function pintarGastos(){
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
    tercerTdNuevo.setAttribute('onClick', 'buttonIcon()');


    for(let i=0; i<arrNombresGastos.length; i++){
        // recorremos el arreglo y extraemos nombre
        unTdNuevo.innerText = arrNombresGastos[i];
        // recorremos el arreglo y extraemos valor
        segundoTdNuevo.innerText = arrCantidadGastos[i];

        // enviamos a los párrafos correspondientes con append
        tableBody.appendChild(unTrNuevo);
        unTrNuevo.appendChild(unThNuevo);
        unTrNuevo.appendChild(unTdNuevo);
        unTrNuevo.appendChild(segundoTdNuevo);
        unTrNuevo.appendChild(tercerTdNuevo);
    }

    // elParrafoValor.innerText = valorCantidadGasto;
}




function muestroNombGasto(){
    let inputNombGasto = document.getElementById('nombreGasto').value;
    let inputValorGasto = document.getElementById('valorGasto').value;

    // almacenamos en los arreglos los gastos añadidos
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


    /* 
    let bodyTabla = document.getElementById('bodyTabla');


    
    let creoUnTr = document.createElement('tr');
    
    console.log(arrRowTablas);
    bodyTabla.appendChild(creoUnTr);
    let creoUnTh = document.createElement('th');

    for(let i=0; i<arrNombresGastos.length; i++){
        creoUnTr.setAttribute('id', `${[i]}`);
    };
    arrRowTablas.push(creoUnTr);
    creoUnTh.scope = 'row';
    creoUnTh.innerText = '*';
    creoUnTr.appendChild(creoUnTh);

    let creoUnTd = document.createElement('td');
    creoUnTr.appendChild(creoUnTd);

    let creoSegundoTd = document.createElement('td');
    creoUnTr.appendChild(creoSegundoTd);

    let creoTercerTd = document.createElement('td');
    let creoIparaIcono = document.createElement('i');
    creoIparaIcono.classList.add('bi');
    creoIparaIcono.classList.add('bi-trash');
    creoIparaIcono.setAttribute('type', 'button');
    creoIparaIcono.setAttribute('onCLick', 'buttonIcon()');
    creoTercerTd.appendChild(creoIparaIcono);

    creoUnTr.appendChild(creoTercerTd);


    

    creoUnTd.innerText = inputNombGasto;
    
    creoSegundoTd.innerText = inputValorGasto
   */
    pintarGastos();
}



function activoEventos(){
    let btnCalcular = document.getElementById('calcular');
    btnCalcular.addEventListener('click', muestroPresup);

    let btnNombGasto = document.getElementById('btnGasto');
    btnNombGasto.addEventListener('click', muestroNombGasto);

    
}
































