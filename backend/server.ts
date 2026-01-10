import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contact';

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.set('trust proxy', 1); // Trust first proxy (required for rate-limit behind Nginx/Load Balancer)
app.use(helmet());

const frontendUrl = (process.env.FRONTEND_URL || 'http://localhost:3000').replace(/\/$/, '');

app.use(cors({
  origin: frontendUrl,
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests, please try again later.'
});
app.use('/api/contact', limiter);

// JSON parsing
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
