const express = require('express')

module.exports = function(server) {
    const router = express.Router()

    server.use('/api', router)
    

    const billingCycleService = require('../api/service/billingCycleService')
    
    server.get('/api/billingCycles',  billingCycleService.getIndex(server.database.models['BillingCycle']))

}