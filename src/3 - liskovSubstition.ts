/*
    To build software systems from interchangeable parts, those parts must adhere to a 
    contract that allows those parts to be substituted one for another.
*/

interface IMailService {
    sendMail(email: IMail): Promise<IEmailTransmissionResult>
}


/*
    We can implement various email services, as long as they implement the IMailService interface and the required sendMail(email: Mail) method.
*/
class SendGridEmailService implements IMailService {
    sendMail(email: IMail): Promise<IEmailTransmissionResult> {
        return new Promise<IEmailTransmissionResult>(resolve => resolve(new EmailTransmissionResult('Success', 'Messagem envianda com sucesso.')));
    }
}

class MailChimpEmailService implements IMailService {
    sendMail(email: IMail): Promise<IEmailTransmissionResult> {
        return new Promise<IEmailTransmissionResult>(resolve => resolve(new EmailTransmissionResult('Success', 'Messagem envianda com sucesso.')));
    }
}

class MailGunEmailService implements IMailService {
    sendMail(email: IMail): Promise<IEmailTransmissionResult> {
        return new Promise<IEmailTransmissionResult>(resolve => resolve(new EmailTransmissionResult('Success', 'Messagem envianda com sucesso.')));
    }
}

class CreateUserController {

    private emailService: IMailService;

    constructor(emailService: IMailService) { 
        this.emailService = emailService;
    }

    protected executeImpl(): void {
        // handle request

        // send mail
        const mail = new Mail("allan.egidio@outlook.com", "teste@solid.com", "<p> This example from Liskov is awesome");
        this.emailService.sendMail(mail);
    }
}

/*
    Everything above is to be able to create a instance of controller that accept anything that implements IMailService.
    So that we can create mocks and test implementation by implementation in TDD.
*/

const mailGunService = new MailGunEmailService();
const mailchimpService = new MailChimpEmailService();
const sendgridService = new SendGridEmailService();

// @ts-ignore -> It's to typescript ignore duplicate names errors.
const createUserController = new CreateUserController(mailGunService);
// @ts-ignore -> It's to typescript ignore duplicate names errors.
const createUserController = new CreateUserController(mailchimpService);
// @ts-ignore -> It's to typescript ignore duplicate names errors.
const createUserController = new CreateUserController(sendgridService);


// =====================================================================================================================================

/*
    Support class and interface for the example
*/

class EmailTransmissionResult implements IEmailTransmissionResult {
    result: TransmissionResult;
    message?: string | undefined;

    constructor(result: TransmissionResult, message: string | undefined) {
        this.result = result;
        this.message = message;
    }
}

type TransmissionResult = 'Success' | 'Failure' | 'Bounced'

interface IEmailTransmissionResult {
  result: TransmissionResult;
  message?: string;
}

interface IMail {
    to: string;
    from: string;
    body: string;
}

class Mail implements IMail {
    to: string;
    from: string;
    body: string;

    constructor(to: string, from: string, body: string) {
        this.to = to;
        this.from = from;
        this.body = body;
    }
}