import path from 'node:path';
import multer from 'multer';

// middleware enabling api to receive upload
export const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback) {
			//salvando imagem com o nome e timestamp
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	})
});
