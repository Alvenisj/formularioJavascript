

// SE CREA LA CLASE CITAS 
class Citas {

    constructor( ) {
        this.citas = [ ]; //ARREGLO DE CITAS QUE SE VA A IR LLENANDO DESDE LA FUNCIÓN NUEVA CITA
    }
    // MÉTODO QUE AGREGA CITAS AL ARREGLO DE CITAS DEL CONSTRUCTOR
    agregarCita( cita ) {
        this.citas = [ ...this.citas, cita ];
        // console.log('Desde la clase Citas, la nueva cita: ', this.citas);
    }
    // MÉTODO QUE ELIMINA UNA CITA 
    eliminarCita( id ) {
        this.citas = this.citas.filter( cita => cita.id !== id );
    }
    // MÉTODO QUE ACTUALIZA LA CITA
    editarCita( citaActualizada ) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
        // console.log(citaActualizada)
    }

}

export default Citas; // ES RECOMENDABLE HACERLO POR default PORQUE ÚNICAMENTE SE VA A EXPORTAR UNA SOLA CLASE