# Link Shortener Project

This project is a simple, professional link shortener web application. It allows users to shorten URLs using a mock function or a real API (e.g., Bitly).

## Project Structure
- **index.html**: Main HTML file.
- **css/styles.css**: Stylesheet for styling the application.
- **js/main.js**: Main JavaScript file handling the shortening logic.
- **config/config.js**: Configuration file to manage API keys and endpoints.

## Setup
1. Replace `YOUR_API_KEY_HERE` in `config/config.js` with a real API key if using Bitly or another shortening service.
2. Open `index.html` in a web browser to use the app.

## Features
- Mock URL shortening by default.
- Option to integrate a real URL shortener API by changing the `useMock` variable to `false` in `main.js`.
- Results are displayed below the input field, allowing for multiple link generations per session.