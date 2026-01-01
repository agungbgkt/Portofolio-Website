import {motion, useInView} from "framer-motion";
import {Children, useRef} from "react";

function Timeline1({ children, align }){
    const ref = useRef(null);
    const view = useInView(ref, {once: true});
    return(
        <motion.div ref={ref} initial={{opacity: 0, y: 60}} animate={view ? {opacity: 1, y: 0} : {}} transition={{duration: 0.6, ease: "easeOut", delay: 0.2}} className={`w-full flex ${align === "left" ? "justify-start" : "justify-end"} my-0`}>{children}</motion.div>
    )
}
export default Timeline1;