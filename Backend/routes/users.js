const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get User Profile
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        console.log('Fetching profile for userId:', userId); // Log the userId being received

        const user = await User.findById(userId).select('-password');
        if (!user) {
            console.log('User not found for userId:', userId); // Log if user not found
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
