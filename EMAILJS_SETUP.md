# EmailJS Setup for Feedback Form

To enable actual email sending to alocerkenoo7@gmail.com, follow these steps:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (recommended)
4. Connect your email account (this will be the sender email)
5. Note down the Service ID (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Feedback Submission - National Esports

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Feedback Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Feedback Submission - National Esports
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">User Information</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Phone:</strong> {{phone}}</p>
            <p><strong>State:</strong> {{state}}</p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Feedback Message</h3>
            <p style="white-space: pre-wrap;">{{feedback}}</p>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
                <strong>Submitted on:</strong> {{submitted_date}}
            </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="text-align: center; color: #6b7280; font-size: 14px;">
            This feedback was submitted through the National Esports website feedback form.
        </p>
    </div>
</body>
</html>
```

4. Save the template and note down the Template ID (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your Public Key (e.g., `user_abc123def456`)

## Step 5: Update the Code

Replace the placeholder values in `src/app/feedback/page.js`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

## Step 6: Test

1. Start your development server: `npm run dev`
2. Go to `/feedback`
3. Fill out and submit the form
4. Check your email at alocerkenoo7@gmail.com

## Alternative: Quick Setup with Test Service

If you want to test immediately, you can use EmailJS's test service:

1. Use these test credentials:
   - Service ID: `service_1234567`
   - Template ID: `template_1234567`
   - Public Key: `your_public_key`

2. This will send emails to a test inbox that you can access

## Troubleshooting

- Make sure all IDs are correct
- Check browser console for error messages
- Verify your email service is properly connected
- Ensure you're not exceeding the free tier limits

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Gmail/Outlook integration

This should be sufficient for testing and moderate usage. 