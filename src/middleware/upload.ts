import multer from 'multer';
import utils from 'util';
import { getFileId } from '../common/filenameHelper';

const fileUploadDir = process.env.FILE_UPLOAD_DIR || 'temp'; // cwd is project root

// define upload limit here
const limits = {

};

/** 
 * all file will be upload to the same folder first
 * at this stage, we have no idea of whether the file is uploaded by who
 * 
 * these file will be retrieved by other services and move to the target place
 * file in this folder will be clean up periodically
 */
const storage = multer.diskStorage({
  destination: fileUploadDir,
  filename: (req, file, cb) => {
    const newFilename = getFileId(file);
    cb(null, newFilename);
  },
})

const uploadFile = multer({ storage, limits, }).single('file');

export const singleFileUploadMiddleware = utils.promisify(uploadFile);