import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {config} from 'dotenv'
import cors from 'cors';
import sectorRoutes from './routes/sector/sectorRoutes.js';
import topicRoutes from './routes/topic/topicRoutes.js';
import intensityRoute from './routes/intensity/intensityRoute.js';
import regionRoutes from './routes/region/regionRoutes.js';
import impactRoutes from './routes/impact/impactRoute.js';
import regionImpactRoutes from './routes/regionImpact/regionImpact.js';
import topicRelevance from './routes/topicRelevance/topicRelevance.js';
import yearsRoute from './routes/availableyears/availableyear.js'
import relevance from './routes/relevance/relevance.js';
import pestleIntensity from './routes/pest/pestRoute.js'
import countryLikelihood from './routes/countryLikelihood/countryLikelyhood.js'
import iwsRoutes from './routes/intensitywsector/iWS.js';

config();
const port = process.env.PORT || 5001;

const mongoURI = process.env.MONGOURI;
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(async() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const expressApp = express();

// Middleware
expressApp.use(express.json());
expressApp.use(morgan('dev'));
expressApp.use(cors());

expressApp.get("/", (req, res) => {
  res.send("Application Running 301");
});

expressApp.use('/api/sectors', sectorRoutes);
expressApp.use('/api/topics', topicRoutes);
expressApp.use('/api/regions', regionRoutes);
expressApp.use('/api/impact', impactRoutes);
expressApp.use('/api/regionImpact', regionImpactRoutes);
expressApp.use('/api/regionImpact', regionImpactRoutes);
expressApp.use('/api/countryLikelihood', countryLikelihood);  
expressApp.use('/api/intensity', intensityRoute);
expressApp.use('/api/pestleIntensity', pestleIntensity);
expressApp.use('/api/years', yearsRoute);
expressApp.use('/api/relevance', relevance);
expressApp.use('/api/secWinten', iwsRoutes);
expressApp.use('/api/topicRelevance', topicRelevance);


expressApp.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

expressApp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
