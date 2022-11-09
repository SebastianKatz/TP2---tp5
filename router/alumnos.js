import express from 'express'
import {ControladorAlumnos} from '../controller/alumnos.js'

export class RouterAlumnos{
    constructor(){
        this.router = express.Router()
        this.controladorAlumnos = new ControladorAlumnos()
    }
    start(){
        this.router.get('/', this.controladorAlumnos.getAlumnos)
        this.router.get('/resumen', this.controladorAlumnos.getResumen)
        this.router.post('/', this.controladorAlumnos.postAlumnos)
        return this.router
    }
}