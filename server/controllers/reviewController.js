import Review from '../models/Review.js';

export const createReview = async (req, res) => {
  try {
    const { professionalId, rating, comment } = req.body;

    const review = new Review({
      reviewer: req.user.id,
      professional: professionalId,
      rating,
      comment
    });

    await review.save();
    res.status(201).json({ message: "Review submitted", review });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit review" });
  }
};

export const getProfessionalReviews = async (req, res) => {
  const { professionalId } = req.params;

  const reviews = await Review.find({ professional: professionalId }).populate('reviewer', 'name');
  res.json({ reviews });
};
