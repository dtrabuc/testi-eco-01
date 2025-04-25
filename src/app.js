import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import indexRoutes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import configureViewEngine from './config/viewEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// View engine setup
configureViewEngine(app);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());                 // Cookie parser
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', indexRoutes);

// Catch 404 & forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Middleware global de gestion d'erreurs
app.use(errorHandler);

export default app;
