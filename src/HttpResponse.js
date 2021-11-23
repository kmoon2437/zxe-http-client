module.exports = class HttpResponse{
    constructor(res){
        this.core_res = res;
        this.body = res.body;
        this.headers = res.headers;
        this.status = res.statusCode;
    }
    
    to(type){
        switch(type){
            case 'text': return this.body.toString();
            case 'json': return JSON.parse(this.body);
            case 'buffer': return this.body;
        }
    }
}