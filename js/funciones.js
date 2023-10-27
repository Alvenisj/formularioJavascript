
// IMPORTAMOS LAS CLASES
import Citas from '../js/clases/Citas.js';
import UI from '../js/clases/UI.js';

// IMOPORTAMOS LOS SELECTORES
import { 
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
     horaInput,
     sintomasInput,
     formulario
} from './selectores.js'



// INSTANCIAMOS LAS DOS CLASES CREADAS
const administrarCitas = new Citas(); // INSTANCIA CITAS
const ui = new UI(administrarCitas); // INSTANCIA UI


let editando = false; // MODO EDICIÓN

// SE CREA UN OBJETO PARA IR LLENANDO CADA PROPIEDAD CON LOS INPUT DEL FORMULARIO
// LA PROPIEDAD NAME DEL HTML, DEBE COINCIDIR CON LAS PROPIEDADES DEL OBJETO QUE SE VA A LLENAR CON LOS INPUTS
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// ************* FUNCIONES *********************

// AGREGA LOS VALORES A LAS PROPIEDADES DEL OBJETO CITAOBJ
export function datosCita( e ) {

    citaObj[ e.target.name ] = e.target.value;
    // console.log( citaObj ); // MUESTRA EN CONSOLA COMO SE VA LLENANDO EL OBJETO
}

// VALIDA Y AGREGA UNA NUEVA CITA A LA CLASE DE CITAS
export function nuevaCita( e ) {
        e.preventDefault();
        // EXTRAER LA INFORMACIÓN CON DESTRUCTURACION, DEL OBJETO DE CITAOBJ 
        const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
        // VALIDAR CADA INPUT DEL FORMULARIO
        if( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
            ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }
        // VALIDAMOS EL MODO EDICIÓN
        if( editando ) {
            // MENSAJE DE EDITADO CORRECTAMENTE
              ui.imprimirAlerta('Cita editada correctamente');
              // PASAR EL OBJETO DE LA CITA A EDICIÓN
               administrarCitas.editarCita({ ...citaObj })
              // CAMBIAR EL TEXTO DEL BOTON A CREAR CITA
              formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
              // QUITAR EL MODO EDICIÓN PASANDO A FALSE
              editando = false;
            //   console.log('Modo edición');
        } else {
                // CUANDO SE CREA LA CITA 
                // GENERAR UN ID ÚNICO
                citaObj.id = Date.now();
                // CREAR UNA NUEVA CITA
                administrarCitas.agregarCita( {...citaObj} );  // LE PASAMOS UNA COPIA DEL OBJETO Y NO TODA LA REFERENCIA
                // console.log('Modo nueva cita');
                // MENSAJE DE AGREGADO CORRECTAMENTE
                ui.imprimirAlerta('Cita agregada correctamente');
               
         }
        
       
        // REINICIAR EL OBJETO PARA LA VALIDACIÓN
        reiniciarObjeto( );
        // REINICIAMOS EL FORMULARIO
        formulario.reset();
        // MOSTRAR EL HTML DE LAS CITAS
        ui.imprimirHtmlCitas( administrarCitas );

}

// FUNCIÓN QUE REINICIA EL OBJETO
export function reiniciarObjeto( ) {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}
// FUNCIÓN QUE ELIMINA LA CITA
export function eliminarCita( id ) {
    // ELIMINAR LA CITA
    administrarCitas.eliminarCita( id );
    // MOSTRAR UN MENSAJE
    ui.imprimirAlerta('La cita se eliminó correctamente');
    // REFRESCAR LAS CITAS
    ui.imprimirHtmlCitas( administrarCitas ); // LE PASAMOS TODO EL OBJETO DE LA CLASE
    
}

// CARGA LOS DATOS PARA EDITARLOS
export function editarCita( cita ) {
    
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
    // LLENAR LOS INPUT DEL FORMULARIO
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;
    // LLENAR EL OBJETO PARA PODER VALIDAR
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
    // CAMBIAR EL TEXTO DEL BOTÓN
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';
    // ENTRANDO A MODO EDICIÓN
    editando = true;

}


