const PORT = 3000
const axios = require("axios")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.listen(PORT, () => console.log(`running on port ` + PORT))

app.get("/flights", (req, res) => {
  const options = {
    url: "https://83b89beb-968a-4eb1-ae6e-1110837008ff-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures",
    headers: {
      accept: "application/json",
      "X-Cassandra-Token":
        "AstraCS:SSbsEWhZXORUrIhWZaQmmWRX:3290016673232f75c5ac1261e76f5256c13d07cedf92af89181060c24b51f9e4",
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
