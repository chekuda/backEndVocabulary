const express = require('express')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const commonPaths = require('./server-config/commons-paths/common-paths')
// const routes = require('./server-config/api/routes/routes')

const app = express()

// app.use(cors())

// const port = process.env.PORT || 5000

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

// routes(app)

app.get('/', (req, res) => res.send('WELLCOME TO CHECKUDA API'))

app.listen(port)

console.log(`listening on port ${port}`)