/*
    In this case the principle Open and Closed is violated.
    It's a concrete implementation and if it needs a modification, it will impact in a lot of pieces of your business rules.
    Example if you need use another MailService.
*/


// @ts-ignore -> It's to typescript ignore duplicate names errors.
class SendGridService {

    private sg;
    constructor(sendgridInstance: any) {
        this.sg = sendgridInstance;
    }

    sendMail(from: string, to: string, body: string) : Promise<IEmailResult> {
        this.sg.from = from;
        this.sg.to = to;
        this.sg.body = body;
        // format the mail object to the sendgrid api shape
        // send it
        // create a result object 
        let emailResult: IEmailResult = new EmailResult("success", "");

        return new Promise<IEmailResult>(resolve => resolve(emailResult));
    }
}

/*
    In this case the principle Open and Closed principle it's respected
    If you need use anothe service, you just need implement a new algorithm in order to enable loose coupling. 
    Higher level-components are protected from changes to lower level components.
*/

// @ts-ignore -> It's to typescript ignore duplicate names errors.
class SendGridService implements IEmailService {

    private sg;
    constructor(sendgridInstance: any) {
        this.sg = sendgridInstance;
    }

    sendMail(from: string, to: string, body: string) : Promise<IEmailResult> {
        this.sg.from = from;
        this.sg.to = to;
        this.sg.body = body;
        // format the mail object to the sendgrid api shape
        // send it
        // create a result object 
        let emailResult: IEmailResult = new EmailResult("success", "");

        return new Promise<IEmailResult>(resolve => resolve(emailResult));
    }
}

class SendMailgunService implements IEmailService {

    private sg;
    constructor(mailgunInstance: any) {
        this.sg = mailgunInstance;
    }

    sendMail(from: string, to: string, body: string) : Promise<IEmailResult> {
        this.sg.from = from;
        this.sg.to = to;
        this.sg.body = body;
        // format the mail object to the sendgrid api shape
        // send it
        // create a result object 
        let emailResult: IEmailResult = new EmailResult("success", "");

        return new Promise<IEmailResult>(resolve => resolve(emailResult));
    }
}


/*
    Class and Interfaces
*/

interface IEmailService {
    sendMail(from: string, to: string, body: string):  Promise<IEmailResult>;
}

interface IEmailResult {
    readonly success: string;
    readonly error: string;
}

class EmailResult implements IEmailResult {
    public readonly success: string;
    public readonly error: string;

    constructor(success: string, error: string) {
        this.success = success;
        this.error = error;        
    }
}