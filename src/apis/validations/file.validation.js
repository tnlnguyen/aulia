const Joi = require('joi')

const fileSchema = {
    body: Joi.object().keys({
        fileName: Joi.string().required(),
        fileContent: Joi.string().required(),
    }),
}

module.exports = {
    fileSchema
}
