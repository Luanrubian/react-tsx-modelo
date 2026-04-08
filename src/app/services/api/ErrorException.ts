export class ApiException extends Error{
    public readonly messagem: string = '';
    constructor(message:string){
        super();

        this.message =  message
    }
}