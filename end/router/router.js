

module.exports = function(router) {

	router.get("/", function() {

		this.body = 'Hello World';
	})

	router.get('/blog', function *(next) {

	  	this.body = 'YoFoon';

	});

}