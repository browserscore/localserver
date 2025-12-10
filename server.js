const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Absolute path to the parent directory
const projectRoot = path.join(__dirname, '..');

// Serve static files
app.use('/', express.static(path.join(projectRoot, 'app')));
app.use('/features', express.static(path.join(projectRoot, 'features')));
app.use('/supports/src', express.static(path.join(projectRoot, 'supports/src')));

// Start the server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
