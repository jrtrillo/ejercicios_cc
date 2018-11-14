# Ejercicios Desplegando aplicaciones en la nube Uso de PaaS y DBaaS

## Ejercicio 1: Darse de alta en algún servicio PaaS tal como Heroku, zeit, BlueMix u OpenShift.

Se puede ver en el [enlace](https://github.com/jrtrillo/ejercicios_cc/blob/master/DesplegandoaplicacionesenlanubeUsodePaaSyDBaaS/ejercicio1darsedealta.png)

## Ejercicio 2: Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.

Se ha decidido utilizar Heroku para realizar un despliegue de prueba de Python usando alguno de los ejemplos incluidos de PaaS. Para ello se han realizado los siguientes pasos que se puede ver en el [enlace](https://devcenter.heroku.com/articles/getting-started-with-python)

El primer paso son:
	 -Instalar Python version 3.7.
	 -Tener una cuenta en Heroku.
	 -Instalar Heroku.

Una vez realizada estas acciones se procede a entrar en la cuenta de Heroku y a clonar la base de datos, para ver los paso a realizar se siguen los pasos del siguiente [enlace](https://devcenter.heroku.com/articles/getting-started-with-python#prepare-the-app).

Se introducen en la línea de Git Bash Here los siguientes comandos:

	-git clone https://github.com/heroku/node-js-getting-started.git
	-cd node-js-getting-started

Una vez que ya se ha realizado estas dos acciones se procede a realizar el despliegue. Para ello se va a seguir los pasos del [enlace](https://devcenter.heroku.com/articles/getting-started-with-python#deploy-the-app)

Por tanto, se meten los siguientes comandos:
	-heroku create 
	-git push heroku master
	-heroku ps:scale web=1
	-heroku open

El primer comando crea la aplicación.
Con el segundo se despliega el código
Con el tercero te puedes asegurar que existe una aplicación que se esta ejecutando.
Con el cuarto se abre la apliación y nos aparece directamente el [enlace](https://arcane-dusk-13715.herokuapp.com/)

## Ejercicio 3:Realizar una app en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

Lo primero que se va realizar es instalar nodejs en el ordenador a través del siguiente [enlace](https://nodejs.org/en/)
Este paquete viene con un paquete preinstalado de npm. Si se descarga la versión de nodejs 11.1.0, la versión que aparece de npm es la 6.4.1 por tanto no se tiene que instalar ya el nmp. 
A continuación, se utiliza nmp para instalar express y por tanto, se utiliza el siguiente comando

	-npm install express --save

esto nos crea una carpeta llamada nodes_modules en el directorio que se ha ejecutado el comando anterior. Esta carpeta guarda todas las dependencia en la aplicación express. También tiene ya su package.json con las dependencias que necesita. Para crear el programa se crea el archivo index.js que contiene el siguiente código, se ha realizado una modificación al código que se utiliza en el siguiente video [enlace](https://www.youtube.com/watch?v=PhhJknkrmgQ):

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola Jódar y jaen');
});
app.put('/:persona1/:persona2',function(req, res){
	res.send(req.params.persona1+" y "+req.params.persona2+" se van de vacaciones juntos");
});
app.listen(3000, function () {
  console.log('la aplicación express ya se ha iniciado.');
});

Una vez guardado el archivo se realiza el siguiente comando.
	
	node index.js

y se abre otra terminal. Con esta nueva terminar escribimos el código siguiente:

	curl -X PUT http://localhost:3000/Juan/Sofia

Y la respuesta es:
	Juan y Sofia se van de vacaciones juntos

En la terminal donde se ha ejecutado el comando node index.js aparecerá
	la aplicación express ya se ha iniciado.

Y en la url http://localhost:3000/ aparecerá:

	Hola Jódar y jaen.
	

## Ejercicio 4: Crear pruebas para las diferentes rutas de la aplicación.

Nos volvemos a mover a la carpeta donde se ha realizado el anterior ejercicio, crear la carpeta nodes_modules, el archivo package.json y package-lock.json.

Seguidamente se va a hacer es instalar mocha y el supertest.

	npm install mocha -g
	npm install mocha --save-dev
	npm install --save-dev supertest

A continuación, creamos un archivo llamado probar.js que será el test y tiene el siguiente contenido:

var request = require('supertest'),
	app = require('./index.js');

	describe( "Test de entrada correctamente ", function() {
		it('se crea correctamente', function (done) {
		request(app)
			.put('/uno/dos')
			.expect('Content-Type', "text/html; charset=utf-8")
			.expect(200,done);
		});
	});

	describe( "Test de Nodo Raiz ", function() {
		it('se crea correctamente', function (done) {
		request(app)
			.get('/')
			.expect('Content-Type', "text/html; charset=utf-8")
			.expect(200,done);
		});
	});

	describe( "Test de olvido de dos parametros ", function() {
		it('se crea correctamente', function (done) {
		request(app)
			.get('/joseramon')
			.expect(404,done);
		});
	});

	describe( "Test de olvido de un parametro", function() {
		it('se crea correctamente', function (done) {
		request(app)
			.put('/uno')
			.expect(404,done);
		});
	});
Después, se copia el archivo index.js y se pone en la misma carpeta donde se encuentra el archivo probar.js.

por ultimo se ejecuta en la carpeta que se encuentra probar.js el siguiente comando.

	mocha probar.js

## Ejercicio 5:Instalar y echar a andar tu primera aplicación en Heroku.

Ver ejercicio número 2, es el mismo.

## Ejercicio 6:Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

## Ejercicio 7:Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow.

Snap CI no funciona y Codeship pide añadir un número de cuenta.

## Ejercicio 8:Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.

Lo primero que se ha hecho ha sido modificar una parte del package.json por

	"scripts": {
    	"start": "node index.js",
    	"test": "echo \"Error: no test specified\" && exit 1"
  	},

  Como no funciona se ha creado un archivo llamado Procfile que tiene como contenido

  web: node index.js

A continuación, en la misma carpeta se hace lo siguiente

	-git init
	-git add .
	-git commit -am "Initial commit"
	-heroku create 
	-git push heroku master
	-heroku open

Y ha mostrado el siguiente [enlace](https://salty-retreat-32943.herokuapp.com/)

## Ejercicio 9:Crear una aplicación mínima y usar un buildpack no estándar para desplegarla en Heroku o un cartridge no estándar en OpenShift.

## Ejercicio 10:
Darse de alta en un servicio Redis en la nube y realizar sobre él las operaciones básicas desde el panel de control.

Instalar un cliente de línea de órdenes de Redis o una biblioteca cliente REST y realizar desde él las operaciones básicas de creación y lectura de información.

Ejecutar ejemplos de cualquier lenguaje de programación sobre la instalación realizada.

## Ejercicio 11:Realizar un pequeño programa, en el lenguaje elegido y sobre la base de datos "tradicional" elegida (PostgreSQL o cualquiera que se pueda usar online) que realice el ciclo básico de una base de datos. Puede ser la aplicación de calificación de empresas realizada anteriormente.
