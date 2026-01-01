import {motion, useInView} from "framer-motion";
import {useRef} from "react";

function ToolsIcon({children, delay}){
    const ref = useRef(null);
    const view = useInView(ref, {once: true});

    return(
        <motion.div ref={ref} initial={{opacity: 0, y: 20}} animate={view ? {opacity: 1, y: 0} : {}} transition={{type: "spring", stiffness: 120, damping: 15, delay}} className="flex justify-center items-center">{children}</motion.div>
    )
}
export default ToolsIcon;