import multer, { diskStorage } from "multer";
import { join } from "path";

const storage = diskStorage({
  destination: (req, res, cb) => {
    cb(null, join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
export { upload };
