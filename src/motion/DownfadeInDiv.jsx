import { motion, AnimatePresence } from "framer-motion";

const DownfadeInDiv = ({ children, className}) => {
    const DownfadeInEffect = {
        hidden: { y: 250, opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                className={className}
                variants={DownfadeInEffect}
                initial="hidden"
                whileInView="visible"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default DownfadeInDiv;