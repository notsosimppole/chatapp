# ChatGPT Clone with Next.js, Firebase, and OpenAI Integration

This application is a ChatGPT clone developed using Next.js, Firebase, and OpenAI for ChatGPT integration. It allows you to create a chat interface where users can interact with a ChatGPT-powered chatbot.

## Getting Started
1. To get started, use yarn to install dependancies using
```bash
yarn
```

2. Build the application using
```bash
yarn build
```

3. Start development server by 
```bash
yarn dev
```

6. Open your web browser and navigate to http://localhost:3000 to access the application.

## Dependencies

This project relies on the following technologies and libraries:

- **Next.js**: Next.js is a React framework that simplifies server-side rendering and provides a great developer experience.

- **Firebase**: Firebase is used for authentication and real-time database capabilities. You'll need to set up a Firebase project and configure it accordingly.

- **OpenAI**: OpenAI provides the ChatGPT API, which powers the chatbot's conversational abilities. You'll need to sign up for an OpenAI API key and integrate it into the application.

## Configuration

To configure the application, you'll need to set up the following environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key.
- `GOOGLE_CLIENT_ID`: Your Google Client ID (if applicable).
- `GOOGLE_CLIENT_SECRET`: Your Google Client Secret (if applicable).
- `NEXT_PUBLIC_SECRET`: Your secret key (if needed).
- `NEXTAUTH_URL`: The URL for authentication (if applicable).
- `NEXT_PUBLIC_FIREBASE_API_KEY`: Your Firebase API key.
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Your Firebase authentication domain.
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Your Firebase project ID.
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket.
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID.
- `NEXT_PUBLIC_FIREBASE_APP_ID`: Your Firebase app ID.
- `FIREBASE_SERVICE_ACCOUNT_KEY`: Your Firebase service account key (if applicable).

Make sure to secure your environment variables properly, especially your API keys, to prevent unauthorized access to your services.

## Usage

Once the application is up and running, users can interact with the ChatGPT-powered chatbot by typing messages into the chat interface. The chatbot will respond based on its trained knowledge and conversational abilities.

You can further customize and extend the chatbot's functionality by modifying the code in the application.

