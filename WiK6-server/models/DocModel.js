module.exports = function(esClient, esIndex){
	console.log(esIndex);
	this.esClient = esClient;
	this.esIndex = esIndex
}

module.exports.prototype = {
	esClient: null,
	esIndex: null,

	setEsClient: function(esClient){
		this.esClient = esClient;
	},
  
	setEsIndex: function(esIndex){
		this.esIndex = esIndex;
	},

	getDocs: function(callback) {
		this.esClient.search({
			index: this.esIndex,
			type: "doc"
		}, callback);
	}

};
