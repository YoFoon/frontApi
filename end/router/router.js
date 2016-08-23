

module.exports = function(router) {

	router.get("/", function() {

		this.body = 'Hello World';
	})

	router.get('/blog', function *(next) {
	  	console.log(this.request.query)
	  	console.log(this.query)
	  	this.body = this.query;
	});

}