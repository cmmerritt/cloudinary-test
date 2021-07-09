import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import cloudinary from 'cloudinary';

const app = express();

app.use(express.json());

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// let imageId = Math.floor(Math.random() * 10);

// cloudinary.v2.uploader.upload('https://i.imgur.com/FWUoIhk.jpg',
//   { public_id: imageId }, 
//   function(error, result) {
//     console.log(result); 
//   });

// console.log(`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1625691784/${imageId}.jpg`);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

