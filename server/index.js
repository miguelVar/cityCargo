const express=require('express');
const cors=require('cors');
const app=express();

//settings
app.set('port',process.env.PORT || 3000);

// //middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use('/api/orden', require('./routes/orden.routes'));
app.use('/api/vehiculo', require('./routes/vehiculo.routes'));

//starting
app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto', app.get('port'));
})