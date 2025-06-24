// Example using Resend for emails. You'll need to install it: npm install resend
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// This is the function that will be executed when the form is submitted
export default async (req, res) => {
  // We only want to handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, preferredClass, date } = req.body;

    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'YogaDojo Website <onboarding@resend.dev>', // This "from" address must be a verified domain in Resend
      to: ['your-personal-email@example.com'], // IMPORTANT: Replace with the owner's actual email address
      subject: `New Yoga Inquiry from ${name}`,
      html: `
        <h2>New Class Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Class:</strong> ${preferredClass}</p>
        <p><strong>Preferred Date:</strong> ${new Date(date).toLocaleString()}</p>
      `,
    });

    if (error) {
      return res.status(400).json(error);
    }

    // Send a success response back to the frontend
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};