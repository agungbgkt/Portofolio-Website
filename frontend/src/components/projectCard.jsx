import{Link} from "react-router-dom";
import {motion} from "framer-motion";

function ProjectCard({image, title, desc, link, delay}){
    return(
        <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}} className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg p-3 flex flex-col gap-3 md:hidden">
            {/* image */}
            <img src={image} alt={title} className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg p-3 flex flex-col gap-3 md:hidden"/>
            {/* text */}
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-white">{desc}</p>
            </div>
            {/* button view more */}
            <Link to={link} className="w-full bg-gray-800 border border-yellow-500 hover:bg-yellow-600 text-center text-sm font-semibold py-2 rounded-lg transition">View More</Link>
        </motion.div>
    )
}
export default ProjectCard;