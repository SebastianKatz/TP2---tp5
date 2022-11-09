import {CnxMongoDB} from '../DB.js'

export class AlumnosMongoDAO{
    findAlumnos = async _ => {
        if(!CnxMongoDB.connection) return []
        try {
            let alumnos = await CnxMongoDB.db.collection('alumnos').find({}).toArray()
            return alumnos
        } catch {
            return []
        }
    }
    findResumen = async _ => {
        if(!CnxMongoDB.connection) return []
        try{
            let sumNotas = 0
            let alumnos = await this.findAlumnos()
            let cantNotas = alumnos.length
            alumnos.forEach(alumno => sumNotas+= alumno.nota)
            let promedio = sumNotas / cantNotas
            return {
                promedio,
                cantNotas
            }
        }
        catch{
            return []
        }
    }
    saveAlumno = async alumno => {
        if(!CnxMongoDB.connection) return {}
        alumno.nota = parseInt(alumno.nota)
        let respuesta = await CnxMongoDB.db.collection('alumnos').insertOne(alumno)
        if(respuesta.acknowledged) return { status: 'ok'}
        else return { status: 'fail'}
    }
}