import express from "express";
import upload from "../config/multer.js";
import createCard from "../controller/cardController.js";

const router = express.Router();

router.post("/create", upload.single("image"), createCard); // Menggunakan middleware multer untuk mengunggah file gambar

export default router;