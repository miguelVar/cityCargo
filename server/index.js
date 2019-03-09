const express=require('express');
const cors=require('cors');
const app=express();
const ibmdb=require('../server/config/database');

//settings
app.set('port',process.env.PORT || 3000);

// //middleware
// app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
// app.use('/api/clients',require('./routes/client.routes'));
app.use('/api/destinationcity',require('./routes/destinationCity.routes'));


//starting
app.listen(app.get('port'),()=>{
    console.log('corriendo');
})