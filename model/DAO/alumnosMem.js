export class AlumnosMemDAO{
    constructor(){
        this.alumnos = [
            { "id": "1", "nombre": "Sebastian", "apellido": "Katz", "curso": "21A", "nota": 6},
            { "id": "2", "nombre": "Matias ", "apellido": "Apellido", "curso": "21B", "nota": 7},
            { "id": "3", "nombre": "Pedro", "apellido": "Lopez", "curso": "21C", "nota": 8},
            { "id": "4", "nombre": "Sergio", "apellido": "Perez", "curso": "21D", "nota": 9},
        ]
    }
    findAlumnos = async _ => {
        return this.alumnos
    }
    findResumen = async _ => {
        let sumnNotas = 0
        let cantNotas = this.alumnos.length
        this.alumnos.forEach(alumno => sumnNotas+= alumno.nota)
        let promedio = sumnNotas / cantNotas
        return {
            promedio,
            cantNotas
        }
    }
    saveAlumno = async alumno => {
        alumno.nota = parseInt(alumno.nota)
        const id = parseInt(this.alumnos[this.alumnos.length-1].id) + 1
        alumno.id = String(id)
        this.alumnos.push(alumno)
        return { status: 'ok'}
    }
}