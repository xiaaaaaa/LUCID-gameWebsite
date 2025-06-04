import { motion, AnimatePresence } from "framer-motion";

const FadeInMotionDiv = ({ children, className}) => {
    return (
        <AnimatePresence>
            <motion.div
                className={className}
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.0, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default FadeInMotionDiv;