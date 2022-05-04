import nodemailer from 'nodemailer';
import { MailAdpter, SendMailData } from '../mail-adpter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0acc21d71e2892",
        pass: "994315f606bd93"
    }
});

export class NodeMailerMailAdapter implements MailAdpter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <hello@feedget.com>',
            to: 'Thales Trombim <thalaotr@gmail.com>',
            subject,
            html: body
        })
    };
}