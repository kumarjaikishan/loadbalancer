const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    return res.status(200).send(`Hi this backend running on Port: ${port} & pid : ${process.pid}`)
})


app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found, kindly Re-Check api End point' });
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
})
