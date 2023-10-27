// IMPORTAMOS LAS DOS FUNCIONES
import { datosCita, nuevaCita } from '../funciones.js'

// IMOPORTAMOS LOS SELECTORES
import { 
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
     horaInput,
     sintomasInput,
     formulario
} from '../selectores.js'


// LA CLASE QUE INICIA LA APLICACIÓN
class App {
    

    constructor( ) {   
        this.initApp();  
    }

    initApp( ) {

          // EVENTLISTENER DE LOS INPUT
          mascotaInput.addEventListener('input', datosCita );
          propietarioInput.addEventListener('input', datosCita );
          telefonoInput.addEventListener('input', datosCita );
          fechaInput.addEventListener('input', datosCita );
          horaInput.addEventListener('input', datosCita );
          sintomasInput.addEventListener('input', datosCita );
          // EVENTLISTENER QUE SE ENCARGA DEL FORMULARIO
          formulario.addEventListener('submit', nuevaCita );

    }
}


export default App;
