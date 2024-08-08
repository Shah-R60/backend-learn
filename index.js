require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const data ={
    "id": "abc123",
    "name": "AAA 000",
    "imei": "123456789123",
    "vehicle_params": {
        "vin": null,
        "make": null,
        "model": null,
          "plate_number": null
    }
}

app.get('/', (req, res) => {
  res.send('i want to say that')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/youtube',(res,req)=>{
    res.send('i will work hard for you');
})
app.get('/github',(req,res)=>
{
    res.json(data);
})