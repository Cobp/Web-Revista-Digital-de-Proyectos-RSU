import multer from "multer";

const Guardar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../public/uploads');
    },
    filename: function (req, file, cb) {
        if(file !== null) {
            const ext = file.originalname.split('.').pop();
            cb(null, Date.now() + '.' + ext);
        }
    }
});

const Filter = (req, file, cb) => {
    if(file && (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')){
        cb(null, true);
    }else{
        cb(null, false);
    }
};

export const UploadImage = multer({storage: Guardar, fileFilter: Filter});
