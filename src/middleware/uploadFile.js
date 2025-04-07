import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder tempat file akan disimpan
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Penamaan file
    },
});

const upload = multer({ storage });

export default upload;