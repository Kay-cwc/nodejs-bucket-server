/**
 * module that controll everything about naming a file
 */
import { createHash } from "crypto";

/**
 * create fileId in this pattern `<timestamp in ms>-<filename hash>.<ext>`
 * @param file 
 * @returns 
 */
export const getFileId = (file: Express.Multer.File) => {
  // extract the file extension from the mimetype
  const ext = file.mimetype.split('/').pop() || '';
  const nameHash = createHash('sha1').update(file.originalname).digest('hex');

  return `${Date.now()}-${nameHash}.${ext}`;
}
