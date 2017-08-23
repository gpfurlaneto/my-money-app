const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')

let database = null

const loadModules = (sequelize) => {
    const dir = path.join(__dirname, '../api/models')
    let models = []
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file)
        const model = sequelize.import(modelDir)
        models[model.name] = model
    })
    return models
}

module.exports = () => {
    
    if(!database) {
        const sequelize = new Sequelize('postgres://postgres:@:5432/postgres')
        sequelize.authenticate()
            .then(() => {
            console.log('Connection has been established successfully.');
            })
            .catch(err => {
            console.error('Unable to connect to the database:', err);
            });

        database = {
            sequelize,
            Sequelize,
            models: {}
        }

        database.models = loadModules(sequelize)

        sequelize.sync().done(() => {
            return database
        })

    }

    return database
}