const express=require('express');
const cors=require('cors');
const app=express();

//settings
app.set('port',process.env.PORT || 3000);

// //middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//routes
app.use('/usuario', require('./routes/login.routes'));
app.use('/api/clients',require('./routes/client.routes'));
app.use('/api/transportElement',require('./routes/transportElements.routes'));
app.use('/api/servicecitycargo',require('./routes/serviceCityCargo.routes'));

app.use('/api/orden', require('./routes/orden.routes'));
app.use('/api/vehiculo', require('./routes/vehiculo.routes'));
app.use('/api/conductor', require('./routes/conductor.routes'));
app.use('/api/tipovehiculo', require('./routes/tipoVehiculo.routes'));

//starting
app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto', app.get('port'));
})