import ProjectCard from "../components/projectCard";
import homeImg from "../assets/image/Project/HandGestureControl/home.png";
import homeImg2 from "../assets/image/Project/AlarmGempa/tim.jpg";
import homeImg3 from "../assets/image/Project/PortofolioWebsite/home.png";
import homeImg4 from "../assets/image/Project/RedesignMarketMobile/home.png";
import ProjectCardDesktop from "../components/ProjectCardDesktop";

function Project(){
    return(
        <section id="projects" className="min-h-screen w-full text-white pt-28 md:pt-32 px-6 md:px-14 mt-20">
            {/* mobile section */}
            <div className="md:hidden flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold">My Projects</h2>
            </div>
            {/* project card */}
            <div className="relative w-full flex flex-col items-center md:hidden top-10">
                <ProjectCard
                    image={homeImg}
                    title="Website Hand Gesture Control"
                    desc="Project yang bisa menggeser/mengganti slide ppt dengan gesture tangan menggunakan library MediaPipe dan menggunakan FastApi untuk terhubung ke sisi backend dan menggunakan Firebase sebagai storage"
                    link="/ProjectDetail"
                />
            </div>
            {/* project card */}
            <div className="relative w-full flex flex-col items-center md:hidden top-20">
                <ProjectCard
                    image={homeImg2}
                    title="Alarm Gempa"
                    desc="Project membuat alarm gempa dengan mikrokontroler dan sistem tertanam yang mengandalkan data yang diperoleh dari sensor yang digunakan"
                    link="/ProjectDetail"
                />
            </div>
            {/* project card */}
            <div className="relative w-full flex flex-col items-center md:hidden top-30">
                <ProjectCard
                    image={homeImg3}
                    title="Website Portofolio Pribadi"
                    desc="Membuat website portofolio yang interaktif dan responsif menggunakan framework react js"
                    link="/ProjectDetail"
                />
            </div>
            {/* project card */}
            <div className="relative w-full flex flex-col items-center md:hidden top-40">
                <ProjectCard
                    image={homeImg4}
                    title="Redesign Market Mobile"
                    desc="Redesign market aplikasi mobile untuk mengurangi kekurangan yang ada pada design sebelumnya menggunakan figma"
                    link="/ProjectDetail"
                />
            </div>
            {/* Buttons */}
            <div className="relative flex flex-col gap-4 mt-50 w-full md:hidden items-center">
                <a href="#" className="px-6 py-3 border border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-black transition-all">Explore Project</a>
            </div>

            {/* desktop section */}
            <div className="hidden md:flex flex-col items-center text-center w-full mt-10">
                <h2 className="text-3xl font-bold">My Projects</h2>
            </div>
            {/* project card */}
            <div className="relative w-full hidden md:grid grid-cols-2 lg:grid-cols-4 gap-24 justify-items-center top-10">
                <ProjectCardDesktop
                    image={homeImg}
                    title="Website Hand Gesture Control"
                    desc="Project yang bisa menggeser/mengganti slide ppt dengan gesture tangan menggunakan library MediaPipe dan menggunakan FastApi untuk terhubung ke sisi backend dan menggunakan Firebase sebagai storage"
                    link="/ProjectDetail"
                />
                <ProjectCardDesktop
                    image={homeImg2}
                    title="Alarm Gempa"
                    desc="Project membuat alarm gempa dengan mikrokontroler dan sistem tertanam yang mengandalkan data yang diperoleh dari sensor yang digunakan, disini kami menggunakan sensor SW-240 dan Sensor MPU-6050"
                    link="/ProjectDetail"
                />
                <ProjectCardDesktop
                    image={homeImg3}
                    title="Website Portofolio Pribadi"
                    desc="Membuat website portofolio yang interaktif dan responsif menggunakan framework react js"
                    link="/ProjectDetail"
                />
                <ProjectCardDesktop
                    image={homeImg4}
                    title="Redesign Market Mobile"
                    desc="Redesign market aplikasi mobile untuk mengurangi kekurangan yang ada pada design sebelumnya menggunakan figma"
                    link="/ProjectDetail"
                />
            </div>
            {/* Buttons */}
            <div className="relative md:flex flex-col gap-4 mt-30 w-full hidden items-center">
                <a href="#" className="px-6 py-3 border border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-black transition-all">Explore Project</a>
            </div>
        </section>
    )
}
export default Project;