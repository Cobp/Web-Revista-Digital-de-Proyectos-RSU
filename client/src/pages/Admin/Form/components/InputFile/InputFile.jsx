import { motion } from "framer-motion";
import { IconoPhotoUp, IconoX } from "../../../../../assets";
import { Tooltip } from "../../../../../components";
import './InputFile.Module.css'

const InputFile = ({ image, setImage, nameImage, setNameImage }) => {
    const handleDeleteImage = () => {
        setNameImage(null);
        setImage(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
            setNameImage(file.name);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
        setNameImage(file.name);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="file-upload-label">
            {image ? (
                <>
                    <img src={image} alt="" />
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className="data-image"
                    >
                        <p>{nameImage}</p>
                        <Tooltip label={"Borrar imagen"} position={"bottom-right"}>
                            <button
                                type="button"
                                className="btn-tooltip btn-delete-img"
                                onClick={handleDeleteImage}
                            >
                                <IconoX />
                            </button>
                        </Tooltip>
                    </motion.div>
                </>
            ) : (
                <label
                    for="file"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="file-upload-design"
                >
                    <IconoPhotoUp />
                    <span className="types-of-images">( JPG-JPGE-PNG )</span>
                    <p>Arrastrar y Soltar</p>
                    <span className="browse-button">Examinar imagen</span>
                </label>
            )}
            <input
                id="file"
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                onChange={handleFileChange}
                placeholder=""
            />
        </div>
    );
};
export default InputFile;