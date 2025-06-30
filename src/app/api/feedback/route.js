import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, state, feedback } = body;

    // Validate required fields
    if (!name || !email || !phone || !state || !feedback) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (10 digits, starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Feedback Submission - National Esports

Name: ${name}
Email: ${email}
Phone: ${phone}
State: ${state}

Feedback:
${feedback}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

---
This feedback was submitted through the National Esports website feedback form.
    `;

    // For testing purposes, we'll log the email content and simulate sending
    console.log('=== FEEDBACK EMAIL CONTENT ===');
    console.log('To: info@nationalesports.in');
    console.log('Subject: New Feedback Submission - National Esports');
    console.log('Content:');
    console.log(emailContent);
    console.log('=== END EMAIL CONTENT ===');
    
    // In production, you would integrate with an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - EmailJS (client-side)
    
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'info@nationalesports.in',
    //   subject: 'New Feedback Submission - National Esports',
    //   text: emailContent,
    //   html: emailContent.replace(/\n/g, '<br>')
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Feedback submitted successfully and sent to info@nationalesports.in',
        data: { name, email, phone, state, feedback }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Feedback submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 