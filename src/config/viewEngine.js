import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function configureViewEngine(app) {
  // Ajuste le chemin pour pointer vers src/views
  app.set('views', path.join(__dirname, '../views')); 
  app.set('view engine', 'ejs');
}
