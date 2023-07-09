const httpStatus = require('http-status')
const catchAsync = require('../../utils/catch-async')

const { fileService } = require('../services')

const create = catchAsync(async (req, res) => {
    const file = await fileService.create(req.body, req.user)
    res.send(Response)
    res.status(httpStatus.CREATED).send(file)
})

const getFileByUserId = catchAsync(async (req, res) => {
    const files = await fileService.getFileByUserId(req.user)
    res.status(httpStatus.OK).send(files)
})

module.exports = {
    create,
    getFileByUserId,
}
