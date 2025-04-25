import app from './app.js';
import { config } from './config/config.js';
import debugLib from 'debug';

const debug = debugLib('new-test-');
const port = config.port;

app.listen(port, () => {
  debug(`Serveur lancé sur http://localhost:${port}`);
  console.log(`Serveur prêt sur http://localhost:${port}`);
});
