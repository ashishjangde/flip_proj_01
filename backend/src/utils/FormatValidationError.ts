import type { ZodError , ZodIssue } from "zod";

export default function FormatValidationError(errors : ZodError): Issues[] {
    return errors.errors.map((issues : ZodIssue)=>{
        const path = issues.path.map((path) => path)
        return  new Issues(path.join('.'), issues.message)
        // return `${path.join('.')} : ${issues.message}`
    })
 }

 export class Issues {
    path : string;
    message : string;
    constructor(path: string, message: string){
        this.path = path;
        this.message = message;
    }
 }