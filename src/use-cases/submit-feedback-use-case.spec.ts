import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('Should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Teste Unitário com jest',
            screenshot: 'data:image/png;base64,asdasdasd'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('Should not be to submit feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            comment: 'Teste Unitário com jest',
            screenshot: 'data:image/png;base64,asdasdasd'
        })).resolves.not.toThrow();
    });

    it('Should not be to submit feedback without a comment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'test.jpg'
        })).resolves.not.toThrow();
    });

    it('Should not be to submit feedback with an invalid screenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Tudo bugado',
            screenshot: 'test.jpg'
        })).resolves.not.toThrow();
    });
});