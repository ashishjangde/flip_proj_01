import type { Issues } from "./FormatValidationError";

class ApiError{
    statusCode: number;
    message: string;
    errors?: Issues[] | string[];

    constructor(statusCode: number, message: string, errors?: Issues[] | string[]){
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
    }
}

export default ApiError;