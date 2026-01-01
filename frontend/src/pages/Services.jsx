import ServiceDesktop from "../components/serviceDesktop";
import ServiceCard from "../components/serviceTimeline";


function Service(){
    return(
        <section id="services" className="min-h-screen w-full text-white pt-28 md:pt-32 px-6 md:px-14 mt-20">
            {/* mobile section */}
            <div className="md:hidden flex flex-col items-center text-center pb-6">
                <h2 className="text-3xl font-bold">Services</h2>
            </div>
            {/* row container */}
            <div className="md:hidden flex flex-col items-center gap-6 w-full">
                {/* row 1 */}
                <ServiceCard>
                    <div className="bg-transparent border border-amber-400 text-white p-4 rounded-3xl w-[90%] shadow-md hover:scale-105 transition">
                        <div className="flex items-center gap-4">
                            <img src="/assets/service/mobile.png" alt="Mobile Development" className="w-8 h-8 ml-5"/>
                            <h3 className="text-lg font-semibold ml-5">Mobile Development</h3>
                        </div>
                    </div>
                </ServiceCard>
                {/* row 2 */}
                <ServiceCard>
                    <div className="bg-transparent border border-amber-400 text-white p-4 rounded-3xl w-[90%] shadow-md hover:scale-105 transition">
                        <div className="flex items-center gap-4">
                            <img src="/assets/service/IoT.png" alt="IoT Engineer" className="w-8 h-8 ml-5"/>
                            <h3 className="text-lg font-semibold ml-5">IoT Engineer</h3>
                        </div>
                    </div>
                </ServiceCard>
                {/* row 3 */}
                <ServiceCard>
                    <div className="bg-transparent border border-amber-400 text-white p-4 rounded-3xl w-[90%] shadow-md hover:scale-105 transition">
                        <div className="flex items-center gap-4">
                            <img src="/assets/service/frontendDev.png" alt="Frontend Development" className="w-8 h-8 ml-5"/>
                            <h3 className="text-lg font-semibold ml-5">Frontend Development</h3>
                        </div>
                    </div>
                </ServiceCard>
                {/* row 4 */}
                <ServiceCard>
                    <div className="bg-transparent border border-amber-400 text-white p-4 rounded-3xl w-[90%] shadow-md hover:scale-105 transition">
                        <div className="flex items-center gap-4">
                            <img src="/assets/service/backendDev.png" alt="Backend Development" className="w-8 h-8 ml-5"/>
                            <h3 className="text-lg font-semibold ml-5">Backend Development</h3>
                        </div>
                    </div>
                </ServiceCard>    
                {/* row 5 */}
                <ServiceCard>
                    <div className="bg-transparent border border-amber-400 text-white p-4 rounded-3xl w-[90%] shadow-md hover:scale-105 transition">
                        <div className="flex items-center gap-4">
                            <img src="/assets/service/uiuxDesign.png" alt="UI/UX Design" className="w-8 h-8 ml-5"/>
                            <h3 className="text-lg font-semibold ml-5">UI/UX Designer</h3>
                        </div>
                    </div>
                </ServiceCard> 
                {/* row 6 */}
                <ServiceCard>
                    <div className="bg-transparent border border-amber-400 text-white p-4 rounded-3xl w-[90%] shadow-md hover:scale-105 transition">
                        <div className="flex items-center gap-4">
                            <img src="/assets/service/webDev.png" alt="Full Stack Development" className="w-8 h-8 ml-5"/>
                            <h3 className="text-lg font-semibold ml-5">Full Stack Development</h3>
                        </div>
                    </div>
                </ServiceCard>
                {/* row 7 */}
                <ServiceCard>
                    <div className="bg-transparent border border-amber-400 text-white p-4 rounded-3xl w-[90%] shadow-md hover:scale-105 transition">
                        <div className="flex items-center gap-4">
                            <img src="/assets/service/webDev.png" alt="Graphic Designer" className="w-8 h-8 ml-5"/>
                            <h3 className="text-lg font-semibold ml-5">Graphic Designer</h3>
                        </div>
                    </div>
                </ServiceCard>
            </div>

            {/* desktop section */}
            <div className="hidden md:flex flex-col items-center text-center w-full mt-10">
                <h2 className="text-3xl font-bold">Services</h2>
            </div>
            {/* row container */}
            <div className="relative w-full hidden md:grid grid-cols-2 lg:grid-cols-3 gap-24 justify-items-center top-10">
                <ServiceDesktop delay={0.1} title="Mobile Development" icon="/assets/service/mobile.png" />
                <ServiceDesktop delay={0.2} title="IoT Engineer" icon="/assets/service/IoT.png" />
                <ServiceDesktop delay={0.3} title="Frontend Development" icon="/assets/service/frontendDev.png" />
            </div>
            <div className="relative w-full hidden md:grid grid-cols-2 lg:grid-cols-3 gap-24 justify-items-center top-20">
                <ServiceDesktop delay={0.4} title="Backend Development" icon="/assets/service/backendDev.png" />
                <ServiceDesktop delay={0.5} title="UI/UX Designer" icon="/assets/service/uiuxDesign.png" />
                <ServiceDesktop delay={0.6} title="Full Stack Development" icon="/assets/service/webDev.png" />
            </div>
            <div className="relative w-full hidden md:grid grid-cols-2 lg:grid-cols-1 gap-24 justify-items-center top-30">
                <ServiceDesktop delay={0.7} title="Graphic Designer" icon="/assets/service/webDev.png" />
            </div>
        </section>
    )
}
export default Service;