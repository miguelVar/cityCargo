const express=require('express');
const cors=require('cors');
const app=express();
const ibmdb=require('../server/config/database');

//settings
app.set('port',process.env.PORT || 3000);


app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes


//starting
app.listen(app.get('port'),()=>{
    console.log('corriendo');
})