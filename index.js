const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

let eBay = require('ebay-node-api');
let converter = require('json-2-csv');


let ebay = new eBay({
    clientID: "pricefin-pricefin-PRD-bf2cd4cf7-bca5e5ee",
    limit: 150, // fetches top 10 results in form of JSON.
    env: "PRODUCTION" // optional default = "PRODUCTION"
})


ebay.findItemsByCategory(9355).then((data)=>{
    jsonRes = data;
    console.log(JSON.stringify(data));
});


