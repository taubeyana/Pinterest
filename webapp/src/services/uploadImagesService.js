
import axios from 'axios';

const CLOUDINARY_UPLOAD_PRESET = 'taubeyana';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dat4frntv/upload';

class uploadImagesService {
    static uploadImage(file) {
        const config = {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded === progressEvent.total)
              }
        }
        let fd = new FormData();
        fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        fd.append('file', file)

        return axios.post(CLOUDINARY_UPLOAD_URL,fd, config)
        .then(res => res)
        .catch(err => console.log(err))
    }
}
export default uploadImagesService;