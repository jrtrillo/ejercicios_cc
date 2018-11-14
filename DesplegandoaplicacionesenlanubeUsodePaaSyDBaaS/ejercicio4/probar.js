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