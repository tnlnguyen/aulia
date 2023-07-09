const httpStatus = require('http-status')
const catchAsync = require('../../utils/catch-async')
const ResponseForm = require('../../utils/response')
const { fileService } = require('../services')

const create = catchAsync(async (req, res) => {
    const file = await fileService.create(req.body, req.user)
    res.status(httpStatus.OK).send(ResponseForm(file))
})

const getFileByUserId = catchAsync(async (req, res) => {
    const files = await fileService.getFileByUserId(req.user)
    res.status(httpStatus.OK).send(ResponseForm(files))
})

module.exports = {
    create,
    getFileByUserId,
}
