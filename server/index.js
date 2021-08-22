const express = require('express')
const axios = require('axios')
const cors = require('cors')

function main() {
  const app = express()

  app.use(
    cors({
      origin: '*',
    })
  )
  app.use(express.static(__dirname + '/public/'))

  app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {
    let endpoint = ''
    if (req.url.includes('code')) {
      // console.log('airport')
      endpoint = 'https://api.flightradar24.com/common/v1' + req.url
    } else if (req.url.includes('find')) {
      // console.log('find')
      endpoint = 'https://www.flightradar24.com/v1/search/web' + req.url
    }

    console.log(endpoint)

    axios
      .get(endpoint)
      .then((response) => {
        res.json(response.data)
        // console.log('Success')
      })
      .catch((err) => {
        res.json(err)
        // console.log('err', err)
      })
  })
  app.use(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))

  app.listen({ port: 4000 }, () => {
    console.log('http://localhost:4000')
  })
}

main()
