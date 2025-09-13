import User from '../models/User.js';

export const updateProfessionalProfile = async (req, res) => {
  try {
    const { profession, experience, skills, location, pricing, availability } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        professionalDetails: {
          profession,
          experience,
          skills,
          location,
          pricing,
          availability,
          isVerified: false // admin will verify later
        }
<<<<<<< HEAD
=======
   
        









>>>>>>> new-feature
      },
      { new: true }
    );

    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile", error: err.message });
  }
};

export const getProfessionals = async (req, res) => {
  try {
    const { profession, location } = req.query;

    const filter = {
      role: "professional",
      "professionalDetails.isVerified": true
    };

    if (profession) filter["professionalDetails.profession"] = profession;
    if (location) filter["professionalDetails.location"] = location;

    const professionals = await User.find(filter).select("-password");

    res.status(200).json({ professionals });
  } catch (err) {
    res.status(500).json({ message: "Error fetching professionals", error: err.message });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> new-feature
