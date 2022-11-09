import {MongoClient} from 'mongodb'
import config from '../config.js'

export class CnxMongoDB{
    static connection = false
    static client
    static db

    static conectar = async _ => {
        try {
            console.log('Conectando a la base de datos...')
            CnxMongoDB.client = new MongoClient(config.STRCNX, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            await CnxMongoDB.client.connect()
            console.log('Base de datos conectada')

            CnxMongoDB.db = CnxMongoDB.client.db(config.BASE)
            CnxMongoDB.connection = true
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }
    static desconectar = async _ => {
        if(!CnxMongoDB.connection) return
        await CnxMongoDB.client.close()
    }
}