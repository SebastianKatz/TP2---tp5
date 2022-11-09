import {ApiAlumnos} from '../api/alumnos.js'

export class ControladorAlumnos{
    constructor(){
        this.apiAlumnos = new ApiAlumnos()
    }
    getAlumnos = async (req, res) => {
        res.json( await this.apiAlumnos.obtenerAlumnos() )
    }
    getResumen = async (req, res) => {
        res.json( await this.apiAlumnos.obtenerResumen() )
    }
    postAlumnos = async (req, res) => {
        const alumno = req.body
        res.json( await this.apiAlumnos.guardarAlumno(alumno) )
    }
}