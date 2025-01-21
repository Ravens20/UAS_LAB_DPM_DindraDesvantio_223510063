const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Add Book
router.post('/', async (req, res) => {
    const { title, content, genre, userId } = req.body;
    try {
        const book = new Book({ title, content, genre, userId });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        console.error('Error adding book:', error); // Add error logging
        res.status(500).json({ error: error.message });
    }
});

// Get Books by User
router.get('/user/:userId', async (req, res) => {
    try {
        const books = await Book.find({ userId: req.params.userId }).select('title content genre userId createdAt');
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error); // Add error logging
        res.status(500).json({ error: error.message });
    }
});

// Update Book
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(book);
    } catch (error) {
        console.error('Error updating book:', error); // Add error logging
        res.status(500).json({ error: error.message });
    }
});

// Delete Book
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error('Error deleting book:', error); // Add error logging
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
