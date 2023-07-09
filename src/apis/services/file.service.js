const ApiError = require('../../utils/api-error')

const { File } = require('../models')
const { putFile } = require('./aws.service')

const create = async (body, userId) => {
    const response = await putFile(body)
    
    const ticket = await File.create({
        fileName: body.fileName,
        fileUrl: response.Location, 
        userId,
    })

    return ticket;
}

const getFileByUserId = async (userId) => {
    const filter = {
        userId
    }
    tickets = File.find(filter).populate('userId')
   
    return tickets;
}

module.exports = {
    create,
    getFileByUserId,
}
