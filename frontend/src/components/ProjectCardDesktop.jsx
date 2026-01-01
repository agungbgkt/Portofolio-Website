import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCardDesktop({ image, title, desc, link, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay }}
            viewport={{ once: true }}
            className="w-64 md:w-72 bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col">

            {/* Image */}
            <img src={image} alt={title} className="w-full rounded-lg object-cover object-center"/>

            {/* Text */}
            <div className="flex flex-col gap-2 mt-3 flex-1">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
            </div>

            {/* Button */}
            <Link to={link} className="mt-4 w-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-center text-sm font-semibold py-2 rounded-lg transition">View More</Link>

        </motion.div>
    );
}

export default ProjectCardDesktop;
