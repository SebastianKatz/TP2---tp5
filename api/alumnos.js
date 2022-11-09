import config from '../config.js'
import {AlumnosFactoryDAO} from '../model/DAO/alumnosFactory.js'

export class ApiAlumnos{
    constructor(){
        this.alumnosModel = AlumnosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }
    obtenerAlumnos = async _ => {
        return await this.alumnosModel.findAlumnos()
    }
    obtenerResumen = async _ => {
        return await this.alumnosModel.findResumen()
    }
    guardarAlumno = async alumno => {
        return await this.alumnosModel.saveAlumno(alumno)
    }
}