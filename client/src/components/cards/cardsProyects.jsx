import { motion } from "framer-motion"

const card2 = ({item, index, setSelectedId}) => {
    return (
        <motion.div key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .05 * index + .05 }}
            className='cards'
            onClick={() => setSelectedId(item)}>
            <div className='image_container'>
                <img src={item.image} alt="" />
                <span></span>
            </div>
            <div className='main_content_cards'>
                <p className="title_card">{item.Nombre_Proyecto}</p>
                <p className="description_card">{item.Carrera_Responsable}</p>
            </div>
        </motion.div>
    )
}

export default card2
