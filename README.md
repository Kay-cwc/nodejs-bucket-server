# nodejs-bucket-server  
A simple api server that handle file upload by multipart formdata.  
All file uploaded will be stored in the `/temp` folder in project root. The actual path can be defined by `FILE_UPLOAD_DIR` env.  
All file will be renamed with this pattern `<timestamp in ms>-<filename hash>.<ext>`  
