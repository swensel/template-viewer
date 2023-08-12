import fs from 'fs';
import path from 'path';

export default function routes(app) {
  // Would normally dynamically load this from a DB. Could also do async file load but this is more for stub data / testing.
  const templates = JSON.parse(fs.readFileSync(path.resolve('./server/data/templates.json')));

  app.get('/templates', (req, res) => {
    res.json(templates);
  });
}
