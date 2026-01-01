import {motion, useInView} from "framer-motion";
import {Children, useRef} from "react";

function Timeline({ children, align = "left" }){
    const ref = useRef(null);
    const view = useInView(ref, {once: true});
    return(
        <motion.div ref={ref} initial={{opacity: 0, x: align === "left" ? 80 : -80}} animate={view ? {opacity: 1, x: 0} : {}} transition={{duration: 0.6, ease: "easeOut"}} className={`w-full flex mb-10 ${align === "left" ? "mr-auto" : " ml-auto"}`}>{children}</motion.div>
    )
}
export default Timeline;