import fs from 'fs-extra';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data');
const reviewsPath = path.join(dataPath, 'reviews.json');

// Ensure data directory exists
const ensureDataFile = async () => {
  await fs.ensureDir(dataPath);
  if (!await fs.pathExists(reviewsPath)) {
    await fs.writeJson(reviewsPath, { beaches: [], rosedale: [] });
  }
};

export const getReviews = async (location) => {
  await ensureDataFile();
  const data = await fs.readJson(reviewsPath);
  return data[location] || [];
};

export const saveReviews = async (location, reviews) => {
  await ensureDataFile();
  const data = await fs.readJson(reviewsPath);
  data[location] = reviews;
  await fs.writeJson(reviewsPath, data, { spaces: 2 });
};

export const getReviewById = async (location, id) => {
  const reviews = await getReviews(location);
  return reviews.find(review => review.id === id);
};

export const addReview = async (location, review) => {
  const reviews = await getReviews(location);
  const newReview = { ...review, id: Date.now().toString() };
  reviews.push(newReview);
  await saveReviews(location, reviews);
  return newReview;
};

export const updateReview = async (location, id, updatedReview) => {
  const reviews = await getReviews(location);
  const index = reviews.findIndex(r => r.id === id);
  if (index === -1) return null;
  
  reviews[index] = { ...reviews[index], ...updatedReview, id };
  await saveReviews(location, reviews);
  return reviews[index];
};

export const deleteReview = async (location, id) => {
  const reviews = await getReviews(location);
  const index = reviews.findIndex(r => r.id === id);
  if (index === -1) return false;
  
  reviews.splice(index, 1);
  await saveReviews(location, reviews);
  return true;
};
