# Local Server for Browser Score

This project sets up a local **Node.js** server using **Express** to serve static resources from the `/browserscore/` directory.

## Project Structure

```
/browserscore/
├── localserver            # Node server to start the project locally
├── app/                   # Static resources for app
├── features/              # The feature data (specs, features, tests, etc.)
└── supports/              # Code to test support for certain CSS, JS, HTML syntax
```

## Setup

**1. Navigate to the server directory:**

```bash
cd /browserscore/localserver/
```

**2. Install dependencies:**

```bash
npm install
```

## Running the Server

Start the server with:

```bash
node server.js
```

or, if you have a `start` script in `package.json`:

```bash
npm start
```

or with **nodemon** to automatically restart the server when files change:

```bash
npm run dev
```

The server will start on [http://localhost:3000](http://localhost:3000).

## Notes

This server is intended for local development.
