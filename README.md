# Local Server for Browser Score

This project sets up a local **Node.js** server using **Express** to serve static resources from the `/browserscore/` directory.

## Project Structure

```
/browserscore/
├── localserver            # local serveur
├── app/                   # Static resources for app
├── features/              # Feature-related resources
└── support/               # Support resources
```

## Setup

**1. Navigate to the server directory:**

```bash
cd /browserscore/localserveur/
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

The server will start on [http://localhost:3000](http://localhost:3000).

## Notes

This server is intended for local development.
