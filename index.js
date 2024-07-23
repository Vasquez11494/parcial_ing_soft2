const NombreTarea = document.getElementById('NombreTarea');
const TiempoTarea = document.getElementById('TiempoTarea');
const BtnAgregar = document.getElementById('BtnAgregar');
const ListaTareas = document.getElementById('ListaTareas');
const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreTarea = NombreTarea.value;
    const tiempoTarea = parseInt(TiempoTarea.value, 10);

    if (nombreTarea && tiempoTarea) {
        agregarTarea(nombreTarea, tiempoTarea);
        NombreTarea.value = '';
        TiempoTarea.value = '';
        alert('Tarea agregada correctamente');
    } else {
        alert('Por favor completa todos los campos');
    }
});

function agregarTarea(nombre, tiempo) {

    const tareas = document.createElement('div');
    tareas.classList.add('tarea');
    tareas.innerHTML = `
            <div clas="container">
                <div class="row mt-4 border border-black p-3 d-flex ">
                    <div class="col">
                        <p>${nombre} - ${tiempo} minutos</p>
                        <div class="contador-tiempo">Tiempo transcurrido: <p class="tiempo-cuenta">0</p>
                        </div>
                    </div>
                    <div class="col justify-content-center d-flex">
                        <button type="button" id="PararTiempo" class="btn btn-success w-50 h-50">COMPLETADA</button>
                    </div>
                    <div class="col justify-content-center d-flex">
                        <button type="button" id="ContinuarTiempo" class="btn btn-warning w-50 h-50">CONTINUAR TAREA</button>
                    </div>
                </div>
            </div>
    `;

    
    ListaTareas.appendChild(tareas);

    const contadorTiempo = tareas.querySelector('.tiempo-cuenta');
    let Minutos = 0;
    let segundos = 0;
    let temporizador;


    function iniciarTemporizador() {
        temporizador = setInterval(() => {
            if (segundos == 59) {
                Minutos++;
                segundos = 0;
            }
            segundos++;
            contadorTiempo.textContent = `${Minutos} minutos : ${segundos} segundos`;
        }, 1000);
    }

    function detenerTemporizador() {
        clearInterval(temporizador);
    }

        
    tareas.querySelector('#PararTiempo').addEventListener('click', function () {

        tareas.classList.add('completada');
        detenerTemporizador();
        alert(`Tarea "${nombre}" marcada como completa. Tiempo invertido: ${Minutos} minutos : ${segundos} segundos`);
    });

    tareas.querySelector('#ContinuarTiempo').addEventListener('click', function (e) {
        e.preventDefault;
        confirm('Esta seguro que desea continuar con esta tarea')
        iniciarTemporizador();
    });
    
    
    iniciarTemporizador();


};
