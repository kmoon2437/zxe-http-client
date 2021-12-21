const HttpRequest = require('./src/HttpRequest');
const HttpResponse = require('./src/HttpResponse');

module.exports = {
    HttpRequest,HttpResponse,
    httpRequest(...args){
        return new HttpRequest(...args);
    }
};