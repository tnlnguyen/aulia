const ResponseForm = (res) => {
	return {
		statusCode: 200,
		body: JSON.stringify(res) 
	}
}

module.exports = ResponseForm
