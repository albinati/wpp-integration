# WhatsApp Group Message Parser

This project retrieves messages from a WhatsApp group, parses them using ChatGPT, and populates a database with the parsed data.

## Prerequisites

- Node.js
- npm
- WhatsApp Web API
- OpenAI API Key
- Database (e.g., MongoDB)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/whatsapp-group-parser.git
    cd whatsapp-group-parser
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    DATABASE_URL=your_database_url
    ```

## Usage

1. Start the WhatsApp Web session:
    ```sh
    node index.js
    ```

2. Scan the QR code with your WhatsApp mobile app.

3. The application will start retrieving messages from the specified WhatsApp group, parse them using ChatGPT, and populate the database.

## Project Structure

    index.js package.json

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [OpenAI](https://openai.com/)

---

Feel free to customize this README.md file as needed for your project.
