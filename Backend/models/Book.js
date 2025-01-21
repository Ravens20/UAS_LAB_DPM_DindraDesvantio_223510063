const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    genre: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now } // Add createdAt field
});

module.exports = mongoose.model('Book', BookSchema);
