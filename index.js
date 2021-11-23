const HttpRequest = require('./src/HttpRequest');
const HttpResponse = require('./src/HttpResponse');

module.exports = {
    HttpRequest,HttpResponse,
    http_request(...args){
        return new HttpRequest(...args);
    }
};