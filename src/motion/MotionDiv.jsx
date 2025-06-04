import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = ({ children, className}) => {
    return (
        <AnimatePresence>
            <motion.div
                className={className}
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default MotionDiv;