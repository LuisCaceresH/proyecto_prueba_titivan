//-----------Imports------------------
    //express
    const express = require('express');

    //
    var http = require('http')

    //importar parser de JSON
    const bodyParser = require('body-parser');

//-----------Settings------------------
    //api basado en express
    const app = express();

    //importando routes
    const itinerarios = require('./routes/itinerarios.route');
    const paraderos = require('./routes/paraderos.route');
    const rutas =require('./routes/rutas.route');
    const usuarioAdmin = require('./routes/usuario_admin.route');
    const usuarioSoporte = require('./routes/usuario_soporte.route');

    //indicamos la ubicacion de la carpeta views
    //__dirname da la ruta del archivo que lo ejecuta

    //configuracion de CORS
    app.use((req,res,next)=>{
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
        res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
        next();
     });

//-----------Middlewares------------------
    //app.use(formData.parse({keepExtensions: true}));

    //parseando JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 

    //para entender todos los datos que vengan del formulario y como configuracion extended false por que no enviara imagenes
    //app.use(express.urlencoded ({ extended: true}));

//-----------Routes------------------
    app.use('/api/itinerarios',itinerarios);
    app.use('/api/paraderos',paraderos);
    app.use('/api/rutas',rutas);     
    app.use('/api/usuario_admin/',usuarioAdmin); 
    app.use('/api/usuario_soporte/',usuarioSoporte); 
//-----------Static Files------------------    
    //para archivos imagenes framework archivos css, js, etc
    //app.use(express.static(path.join(__dirname, 'public')));

//-----------Init------------------
    //inicializar servidor solo para mostrar por consola
    http.createServer(app).listen(8001, () => {
        console.log('Server started at http://localhost:8001');
    });



