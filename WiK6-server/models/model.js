var elasticsearch = require('elasticsearch');
var config = require('../config');

var esClient = new elasticsearch.Client({
	host: config.elasticsearch.host,
	log: 'trace'
});

esClient.ping({
	// ping usually has a 100ms timeout
	requestTimeout: 1000,

	// undocumented params are appended to the query string
	hello: "elasticsearch!"
}, function (error) {
	if (error) {
		console.trace('elasticsearch cluster is down!');
	} else {
		console.log('All is well');
	}
});

var DocModel = require('./DocModel');


var docModel = new DocModel(esClient, config.elasticsearch.index);

var model = {
    docModel: docModel
}

module.exports = model;
