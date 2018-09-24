// import cloudinary from 'cloudinary';
// import { random_public_id } from '../../node_modules/cloudinary/lib/utils';
// import { METHODS } from 'http';

import axios from 'axios';


// cloudinary.config({
//     cloud_name: 'dat4frntv', 
//     api_key: '583777393937957', 
//     api_secret: 'EykxsT3H7-bcb1m86zgaFhO1R70',
//     upload_preset:"ncyayhwo"
// })
// const conf = {
//     cloud_name: 'dat4frntv', 
//     api_key: '583777393937957', 
//     api_secret: 'EykxsT3H7-bcb1m86zgaFhO1R70',
//     upload_preset:"ncyayhwo"
// }

const CLOUDINARY_UPLOAD_PRESET = 'taubeyana';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dat4frntv/upload';

class uploadImagesService {
    static uploadImage(file) {
        
        let fd = new FormData();
        fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        fd.append('file', file)

        return axios.post(CLOUDINARY_UPLOAD_URL,fd)
        .then(res => res)
        .catch(err => console.log(err))
    }
}
export default uploadImagesService;