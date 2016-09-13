var test = require("./../component/test");
var GetList = require('./../component/getList');
var GetData = require("./../component/getData");
var saveFront = require("./../component/saveFront");
var CreateApi = require("./../component/createApi");
var CreateSchema = require("./../component/createSchema");
module.exports = function(router) {

	router.get("/", test);

	router.get('/list/:username', GetList);

	//router.get('/:username', saveFront);

	router.get('/:username/:api1', GetData);

	router.get('/:username/:api1/:api2', GetData);

	router.get('/:username/:api1/:api2/:api3', GetData);

	router.get('/:username/:api1/:api2/:api3/:api4', GetData);

	router.get('/:username/:api1/:api2/:api3/:api4/:api5', GetData);

	router.post('/create/api',CreateApi);

	router.post('/create/schema',CreateSchema);
}