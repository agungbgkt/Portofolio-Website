import { motion } from "framer-motion";

function ServiceDesktop({ icon, title, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
            viewport={{ once: true }}
            className="w-64 md:w-72 bg-transparent border border-amber-400 rounded-3xl shadow-lg p-4 flex items-center gap-4 hover:scale-105 transition cursor-pointer">

            {/* Icon */}
            <img src={icon} alt={title} className="w-10 h-10" />

            {/* Text */}
            <h3 className="text-lg font-semibold text-white leading-tight">{title}</h3>
        </motion.div>
    );
}

export default ServiceDesktop;
