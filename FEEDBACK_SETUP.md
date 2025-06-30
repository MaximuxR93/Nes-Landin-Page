# Feedback Form Email Setup

The feedback form is now fully functional with client-side validation and API endpoint. To enable actual email sending, you'll need to integrate with an email service.

## Current Features

✅ **Form Fields:**
- Full Name (required, min 2 characters)
- Email Address (required, valid format)
- Phone Number (required, 10 digits starting with 6-9)
- State (required, dropdown with all Indian states)
- Feedback Comments (required, min 10 characters)

✅ **Validation:**
- Client-side validation with real-time error clearing
- Server-side validation in API route
- Phone number format validation for Indian numbers
- Email format validation

✅ **UI/UX:**
- Modern glassmorphism design
- Responsive layout for all devices
- Loading states and success messages
- Accessibility features (ARIA labels, focus management)
- Smooth animations and transitions

✅ **API Endpoint:**
- `/api/feedback` POST route
- Validates all input data
- Logs email content to console (for development)

## Email Integration Options

### Option 1: Nodemailer with SMTP (Recommended)

1. Install nodemailer:
```bash
npm install nodemailer
```

2. Create environment variables in `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FEEDBACK_EMAIL=your-feedback-email@example.com
```

3. Update `/api/feedback/route.js`:
```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// In the POST function, replace the console.log with:
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.FEEDBACK_EMAIL,
  subject: 'New Feedback Submission - National Esports',
  text: emailContent,
  html: emailContent.replace(/\n/g, '<br>'),
});
```

### Option 2: SendGrid

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Set environment variable:
```env
SENDGRID_API_KEY=your-sendgrid-api-key
FEEDBACK_EMAIL=your-feedback-email@example.com
```

3. Update the API route:
```javascript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In the POST function:
await sgMail.send({
  to: process.env.FEEDBACK_EMAIL,
  from: 'noreply@yourdomain.com', // Verified sender
  subject: 'New Feedback Submission - National Esports',
  text: emailContent,
  html: emailContent.replace(/\n/g, '<br>'),
});
```

### Option 3: Resend

1. Install Resend:
```bash
npm install resend
```

2. Set environment variable:
```env
RESEND_API_KEY=your-resend-api-key
FEEDBACK_EMAIL=your-feedback-email@example.com
```

3. Update the API route:
```javascript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST function:
await resend.emails.send({
  from: 'National Esports <noreply@yourdomain.com>',
  to: [process.env.FEEDBACK_EMAIL],
  subject: 'New Feedback Submission - National Esports',
  text: emailContent,
  html: emailContent.replace(/\n/g, '<br>'),
});
```

## Testing

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `/feedback` or click the Feedback button in the navbar
3. Fill out the form and submit
4. Check the console for the email content (in development)
5. Once email service is configured, check your email inbox

## Security Considerations

- Always validate input on both client and server side
- Use environment variables for sensitive data
- Consider rate limiting for the feedback endpoint
- Sanitize user input before sending emails
- Use HTTPS in production

## Customization

You can customize:
- Email template styling
- Additional form fields
- Validation rules
- Success/error messages
- Email recipients (multiple emails, different departments)

The form is fully responsive and follows modern web standards with excellent accessibility support. 