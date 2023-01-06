import { Request, Response } from 'express';
import { singleFileUploadMiddleware } from './middleware/upload';

export async function uploadSingleController(req: Request, res: Response, ) {
  try {
    await singleFileUploadMiddleware(req, res);

    if (req.file === undefined) {
      return res.status(400).send({ message: 'file upload failed'});
    }

    return res.status(200).send({
      fileId: req.file.filename,
    })
  } catch (error) {
    res.status(500).send({ message: 'something went wrong' });
  }
} 