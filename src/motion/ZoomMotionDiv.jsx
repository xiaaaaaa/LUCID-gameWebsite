import { motion, AnimatePresence } from "framer-motion";

const ZoomMotionDiv = ({ children, className}) => {
    return (
        <AnimatePresence>
            <motion.div
                className={className}
                initial={{ scale: 0.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default ZoomMotionDiv;