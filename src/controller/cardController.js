import express from 'express';
import prisma from '../config/prisma.js';
import upload from '../config/multer.js';

const createCard = async (req, res) => {
    try {
        const { title, description, location } = req.body;
        const imageUrl = req.file ? req.file.path : null; // Path file gambar yang diunggah

        const newCard = await prisma.card.create({
            data: {
                title,
                description,
                location,
                imageUrl,
            },
        });
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: 'Error creating card' });
    }
};

export default createCard;