const PORT = 3001
const axios = require("axios")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())

app.listen(PORT, () => console.log(`running on port ` + PORT))

app.get("/flights", (req, res) => {
  const options = {
    url: process.env.URL,
    headers: {
      accept: "application/json",
      "X-Cassandra-Token": process.env.TOKEN,
    },
  }
  axios
    .request(options)
    .then((response) => {
      console.log(response.data)
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})
