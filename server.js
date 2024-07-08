require('dotenv').config(); // Load environment variables from .env file

// Example usage to verify environment variables are loaded
console.log(process.env.ACCOUNT_SID);
console.log(process.env.AUTH_TOKEN);

// Import necessary modules
const twilio = require('twilio');

// Your Twilio account credentials
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

// Create a Twilio client instance
const client = twilio(accountSid, authToken);

// Function to send SMS
function sendSMS(message, toNumber) 
{
    const options = {
        from: '+15076834871', // Your Twilio number
        to: '+91 7029928270',
        body: message
    };

    // Send SMS using Twilio
    client.messages
        .create(options)
        .then(message => console.log('Message sent successfully:', message.sid))
        .catch(error => console.error('Error sending message:', error));
}

// Example usage
sendSMS('Hello from Twilio!', '+917029928270');