import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, to } = await request.json();
    
    const { data, error } = await resend.emails.send({
    //   from: 'WeightGone <no-reply@weightgone.co.uk>',
    //   to: to,
        from: 'Acme <onboarding@resend.dev>',
        to: 'usrealtyltd@gmail.com',
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #047857; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f3f4f6; padding: 10px; border-radius: 4px; margin-top: 5px;">${message}</p>
          <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            This email was sent from the contact form on WeightGone.co.uk
          </p>
        </div>
      `
    });

    if (error) {
        console.log(error)
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}