import express from 'express';
import middleware from './middleware.mjs';
import routes from './routes.mjs';

const app = express();
const port = 80;

// Initialize middleware
middleware(app);

// Initialize routes
routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
