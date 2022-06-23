class HttpException extends Error{
    constructor(message,statusCode){
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default HttpException;