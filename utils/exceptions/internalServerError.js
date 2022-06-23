class InternalServerError extends Error{
    constructor(message,statusCode = 500){
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default InternalServerError;