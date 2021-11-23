const CentraRequest = require('centra')().constructor;
const HttpResponse = require('./HttpResponse');

module.exports = class HttpRequest extends CentraRequest{
	async send(...args){
	    return new HttpResponse(await super.send(...args));
	}
}