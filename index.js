const { Client, LocalAuth } = require('whatsapp-web.js');
const puppeteer = require('puppeteer');
const qrcode = require('qrcode-terminal');

// Initialize client with local authentication
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false, // set to true if you don't want to see the browser
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // path to Chrome if needed
    }
});

// Generate and display the QR code for WhatsApp Web login
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan the QR code to log in');
});

// Once logged in, listen to incoming messages
client.on('ready', () => {
    console.log('Client is ready!');
});

// Listen for incoming messages and log them
client.on('message', message => {
    console.log(message.body);
});

// Initialize the client
client.initialize();
