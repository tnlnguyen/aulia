const S3 = require('aws-sdk/clients/s3')
const env = require('../../configs/env')

const bucketName = env.aws.bucketName
const region = env.aws.region
const accessKeyId = env.aws.accessKey
const secretAccessKey = env.aws.accessSecret

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

const putFile = ({fileName, fileContent}) => {
	const uploadParams = {
    Bucket: bucketName,
    Body: Buffer.from(fileContent.split(',')[1], 'base64'),
    Key: fileName
  }

  return s3.upload(uploadParams).promise()
}

module.exports = {
	putFile,
}