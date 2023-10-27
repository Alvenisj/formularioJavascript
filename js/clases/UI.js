
// IMPORTAR 
import { eliminarCita, editarCita  } from '../funciones.js';
import { contenedorCitas } from '../selectores.js';

// SE CREA LA CLASE USER INTERFAZ
class UI {

    // MÉTODO QUE IMPRIME UNA ALERTA
    imprimirAlerta( mensaje, tipo ) {

            // CREAR EL DIV DE LA ALERA
            const divAlert = document.createElement('DIV'); // SE CREA EL DIV CON LA ALERTA
            divAlert.classList.add('text-center', 'alert', 'd-block', 'col-12'); // SE AGREGAN LAS CLASES AL DIV CREADO
            // AGREGAR CLASE DEPENDIENDO DEL TIPO DE ERROR
            if( tipo === 'error' ) {
                divAlert.classList.add('alert-danger'); // CLASE DE COLOR ROJO
            } else {
                divAlert.classList.add('alert-success'); // CLASE DE COLOR VERDE 
            }
            // MENSAJE DEL ERROR QUE RECIBIMOS EN LA FUNCIÓN
            divAlert.textContent = mensaje; // AGREGAMOS EL MENSAJE QUE RECIBIMOS EN EL MÉTODO COMO PARAMETRO
            // AGREGAR AL DOM
            document.querySelector('#contenido').insertBefore( divAlert, document.querySelector('.agregar-cita'));
            // QUITAR LA ALERTA DESPUÉS DE 3 SEGUNDOS
            setTimeout( () => {
                divAlert.remove( );
            }, 3000 );

    }

    // MÉTODO QUE IMPRIME LAS CITAS Y LAS MUESTRA EN EL HTML
    imprimirHtmlCitas( { citas } ) {
        
                this.clearHtml(); // LIMPIA LA CITA ANTERIOR CUANDO SE CREA.

                // RECORREMOS EL ARREGLO CON FOREACH
                citas.forEach( cita => {
                const { mascota, propietario, telefono, fecha, hora, sintomas, id  } = cita;
                // CREAR EL DIV QUE VA A CONTENER CADA CITA EN EL DOM
                const divCita = document.createElement('DIV');
                divCita.classList.add('cita', 'p-3');
                divCita.dataset.id = id;

                // SCRIPTING DE LOS ELEMENTOS DE LA CITA
                // H2 QUE VA A CONTENER EL NOMBRE DE LA MASCOTA
                const mascotaParrafo = document.createElement('H2');
                mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                mascotaParrafo.textContent = mascota;

                // P QUE VA A CONTENER EL PROPIETARIO DE LA MASCOTA
                const propietarioParrafo = document.createElement('P');
                propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${ propietario }
                `
                // P QUE VA A CONTENER EL TELÉFONO DEL CLIENTE DE LA MASCOTA
                const telefonoParrafo = document.createElement('P');
                telefonoParrafo.innerHTML = `
                    <span class="font-weight-bolder">Teléfono: </span> ${ telefono }
                `
                // P QUE VA A CONTENER LA FECHA DE LA CITA DE LA MASCOTA
                const fechaParrafo = document.createElement('P');
                fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${ fecha }
            `
                // P QUE VA A CONTENER LA HORA DE LA CITA DE LA MASCOTA
                const horaParrafo = document.createElement('P');
                horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${ hora }
            `
                // P QUE VA A CONTENER LOS SINTOMAS DE LA MASCOTA
                const sintomasParrafo = document.createElement('P');
                sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span> ${ sintomas }
            `
                // BOTÓN PARA ELIMINAR LA CITA DEL HTML
                const btnBorrarCita = document.createElement('button'); // SE USÓ https://heroicons.com/ PARA LOS ICONOS
                btnBorrarCita.classList.add('btn', 'btn-danger', 'mr-1')
                btnBorrarCita.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`;
                btnBorrarCita.onclick = ( ) => eliminarCita( id ); // AL DAR CLICK NOS VAMOS A LA FUNCIÓN QUE ELIMINA LA CITA
            
                // BOTÓN PARA EDITAR LA CITA DEL HTML
                const btnEditarCita = document.createElement('button');
                btnEditarCita.classList.add('btn', 'btn-info');
                btnEditarCita.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>`;
                btnEditarCita.onclick = ( ) => editarCita( cita ); // AL DAR CLICK NOS VAMOS A LA FUNCIÓN QUE EDITA LA CITA

                // AGREGAR LOS PÁRRAFOS AL DIVCITA
                divCita.appendChild( mascotaParrafo );
                divCita.appendChild( propietarioParrafo );
                divCita.appendChild( telefonoParrafo );
                divCita.appendChild( fechaParrafo );
                divCita.appendChild( horaParrafo );
                divCita.appendChild( sintomasParrafo );
                divCita.appendChild( btnBorrarCita );
                divCita.appendChild( btnEditarCita );
                // AGREGAR AL DOM DE LA INTERFAZ
                contenedorCitas.appendChild( divCita );


                 })
        
                 // console.log('jajaja Desde imprimirHtmlCitas de la clase UI ', citas);
    }

    // MÉTODO QUE LIMPIA EL DOM DESPUES DE CREAR UNA NUEVA CITA
     clearHtml( ) {
        while ( contenedorCitas.firstChild ) {   
            contenedorCitas.removeChild( contenedorCitas.firstChild ); 
             }
     }
}



export default UI;