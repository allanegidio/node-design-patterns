/*
    Abstractions should not depend on details. Details should depend on abstractions.  
*/

interface IMailService {
    // refering to concrete "PrettyEmail" and "ShortEmailTransmissionResult" from an abstraction
    // Avoid it.
    sendMail(email: PrettyEmail): Promise<ShortEmailTransmissionResult>
}

interface IMailService {
    // refering "IMail" and "IEmailSendResult" from an abstraction
    // Do it.
    sendMail(email: IMail): Promise<IEmailSendResult>
}


class SendAmazonMailService implements IMailService {
    // concrete class relies on abstractions
    // @ts-ignore -> It's to typescript ignore duplicate names errors.
    sendMail(email: IMail): Promise<IEmailSendResult> {
        return new Promise<IEmailSendResult>(resolve => resolve(new EmailSendResult()));
    }
}









// ===============================================================================================================

/* 
    Support code for example
*/

class PrettyEmail {}
class ShortEmailTransmissionResult {}
interface IMail {}
interface IMailService {}
interface IEmailSendResult {}
class EmailSendResult implements IEmailSendResult {}