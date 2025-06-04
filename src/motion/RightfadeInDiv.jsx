import { motion, AnimatePresence } from "framer-motion";

const RightfadeInDiv = ({ children, className}) => {
    const RightfadeInEffect = {
        hidden: { x: 200, opacity: 0 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                className={className}
                variants={RightfadeInEffect}
                initial="hidden"
                whileInView="visible"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default RightfadeInDiv;