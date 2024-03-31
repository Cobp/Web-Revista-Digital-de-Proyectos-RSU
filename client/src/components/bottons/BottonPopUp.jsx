import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const buttonsmain = () => {
    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            color: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            color: "rgba(255, 255, 255, 1)",
        }
    }
    return (
        <motion.div className='main_buttons'
            initial={{ y: 180, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
        >
            <motion.div className='container_btn'
                whileHover={{ scale: [null, 1.1, 1.05] }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}>
                <Link to={'/proyectos-rsu'}
                    className='btn_all_proyects'>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.50 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 1 }} />
                    </svg>
                    <motion.p
                        initial={{ x: -180, scale: 0 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}>Todos los Proyectos
                    </motion.p>
                </Link>
            </motion.div>
            <motion.div className='container_btn'
                whileHover={{ scale: [null, 1.1, 1.05] }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.3 }}>
                <Link to={''} className='btn_quiz'>
                    <motion.p
                        initial={{ x: 180, scale: 0 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 100,
                            damping: 20
                        }}>Historias de Éxito
                    </motion.p>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <motion.path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 1 }} />
                        <motion.path d="M5 3v4"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 1 }} />
                        <motion.path d="M19 17v4"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 1 }} />
                        <motion.path d="M3 5h4"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 1 }} />
                        <motion.path d="M17 19h4"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1, delay: 1 }} />
                    </svg>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default buttonsmain
