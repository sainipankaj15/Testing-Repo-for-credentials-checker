const express = require('express')
const app = express()
const port = 3000

app.get('/now', function(req, res) {
	return res.send({current_time: new Date()})
})

app.get('/internal/api/v1/now', function(req, res){
	return res.send({current_time: `Internal time is ${new Date()}`})
})

app.get('/healthz', function(req, res) {
	return res.send({healthy: true})
})

app.listen(port, function() {
	console.log("Example app listening on port " + port + "!")
})
