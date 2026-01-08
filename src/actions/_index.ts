import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const TO_EMAIL = import.meta.env.RESEND_TO_EMAIL;

export const server = {
  send: defineAction({
    accept: 'form',
    handler: async ({ request }) => {
        const form = await request.formData();
        const firstName = String(form.get('first-name') || '');
        const lastName = String(form.get('last-name') || '');
        const fromEmail = String(form.get('from-email') || '');
        const message = String(form.get('from-message') || '');

        const fromHeader = fromEmail ? `${firstName} ${lastName} <${fromEmail}>` : `no-reply@${new URL(import.meta.env.SITE || 'example.com').hostname}`;

        try {
            const data = await resend.emails.send({
            from: fromHeader,
            to: [TO_EMAIL],
            subject: `Portfolio Enquiry from ${firstName} ${lastName}`.trim(),
            html: `<p><strong>From:</strong> ${firstName} ${lastName} &lt;${fromEmail}&gt;</p>
                    <p><strong>Message:</strong></p>
                    <div>${message.replace(/\n/g, '<br/>')}</div>`,
            });

            return data;
        } catch (error: any) {
            throw new ActionError({
            code: 'BAD_REQUEST',
            message: error?.message ?? 'Failed to send email',
            });
        }
        },  
    }),
};