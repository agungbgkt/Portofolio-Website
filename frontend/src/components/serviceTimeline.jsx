import {delay, motion} from "framer-motion";
import { Children } from "react";

function ServiceCard({children, delay}){
    return(
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: delay }} viewport={{ once: true }} className="flex justify-center w-full">{children}</motion.div>
    )
}
export default ServiceCard;