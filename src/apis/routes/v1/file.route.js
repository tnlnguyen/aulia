const express = require('express')

const { fileController } = require('../../controllers')
const { fileValidation } = require('../../validations')

const validate = require('../../../middlewares/validate')
const router = express.Router()

const authMiddleware = require('../../../middlewares/auth')
const adminAuthMiddleware = require('../../../middlewares/adminAuth')

router.get('/getByUserId', authMiddleware,fileController.getFileByUserId)
router.post('/addFile', validate(fileValidation.fileSchema), authMiddleware,fileController.create)

module.exports = router

/**
 * @swagger
 * tags:
 *   name: File
 *   description: File
 */

/**
 * @swagger
 * /v1/file/addFile:
 *   post:
 *     summary: Create new file
 *     tags: [File]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fileName
 *               - fileUrl
 *             properties:
 *               fileName:
 *                 type: string
 *               fileUrl:
 *                 type: string
 *             example:
 *               fileName: testFile.html
 *               fileUrl: https://test.com
 *     responses:
 *       "201":
 *         description: Created
 * /v1/file/getByUserId:
 *   get:
 *     summary: Get list of files
 *     tags: [File]
 *     responses:
 *       "200":
 *         description: OK
 */
