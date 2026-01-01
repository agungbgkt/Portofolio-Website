import Timeline from "../components/timeline";
import Timeline1 from "../components/edukasi";
import ToolsIcon from "../components/toolsicon";


function About(){
    return(
        <section id="about" className="min-h-screen w-full text-white pt-28 md:pt-32 px-6 md:px-14 mt-40">
        {/* mobile section */}
        <div className="md:hidden flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-gray-300 mt-3 leading-relaxed text-center" style={{ textAlign: "justify", textAlignLast: "center" }}>Saya sangat tertarik pada pembuatan sistem yang bekerja menghubungkan aplikasi web, database, dan perangkat fisik (IoT). Saat ini saya terus mengeksplorasi cara menggabungkan web development, automasi, dan kecerdasan buatan menjadi solusi yang lebih cerdas dan bermanfaat</p>
        </div>
        {/* education timeline */}
        <h2 className="text-xl font-bold mt-2 mb-6 text-center md:hidden">Education</h2>
        <div className="relative w-full flex flex-col items-center md:hidden">
            {/* line */}
            <div className="absolute left-1/2 top-0 bottom-10 w-[2px] bg-gray-600 transform -translate-x-1/2"></div>
            {/* circle top */}
            <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-gray-800 top-0 left-1/2 transform -translate-x-1/2"></div>
            {/* item 1 */}
            <Timeline align="left">
                <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md w-[45%] mr-auto">
                    <h2 className="font-semibold text-lg">SMP Negeri 1 Cluring</h2>
                    <p className="text-xs mt-2 text-gray-300">2017 — 2020</p>
                </div>
            </Timeline>
            {/* circle top */}
            <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-gray-800 top-45 left-1/2 transform -translate-x-1/2"></div>
            {/* item 2 */}
            <Timeline align="right">
                <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md w-[45%] ml-auto">
                    <h2 className="font-semibold text-lg">SMA Negeri 1 Cluring</h2>
                    <p className="text-sm mt-1">Science Major</p>
                    <p className="text-xs mt-2 text-gray-300">2020 — 2023</p>
                </div>
            </Timeline>
            {/* circle top */}
            <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-gray-800 top-96 left-1/2 transform -translate-x-1/2"></div>
            {/* item 3 */}
            <Timeline align="left">
                <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md w-[45%] mr-auto">
                    <h2 className="font-semibold text-lg">Politeknik Negeri Banyuwangi</h2>
                    <p className="text-sm mt-1">Teknologi Rekayasa Komputer</p>
                    <p className="text-xs mt-2 text-gray-300">2023 — Present</p>
                </div>
            </Timeline>
        </div>
        <h2 className="text-xl font-bold mt-2 mb-6 text-center md:hidden">Personal Strengths</h2>
        <div className="relative w-full flex flex-col items-center md:hidden gap-2">
            {/* row */}
            <Timeline1 align="left">
                <div className="w-full flex flex-row items-center gap-2">
                    <div className="bg-gray-800 text-white p-8 rounded-xl shadow-md w-[47%] ml-auto hover:scale-105 transition">
                        <h2 className="font-semibold text-sm text-center">Attitude</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md w-[47%] mr-auto hover:scale-105 transition">
                        <h2 className="font-semibold text-sm text-center">Critical Thinking</h2>
                    </div>
                </div>
            </Timeline1>
            {/* row */}
            <Timeline1>
                <div className="w-full flex flex-row items-center gap-2">
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md w-[47%] ml-auto hover:scale-105 transition">
                        <h2 className="font-semibold text-sm text-center">Problem Solving</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-7 rounded-xl shadow-md w-[47%] mr-auto hover:scale-105 transition">
                        <h2 className="font-semibold text-sm text-center">Organized</h2>
                    </div>
                </div>
            </Timeline1>
            {/* row */}
            <Timeline1>
                <div className="w-full flex flex-row items-center gap-2">
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md w-[47%] ml-auto hover:scale-105 transition">
                        <h2 className="font-semibold text-sm text-center">Analytic Mindset</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-7 rounded-xl shadow-md w-[47%] mr-auto hover:scale-105 transition">
                        <h2 className="font-semibold text-sm text-center">Team Work</h2>
                    </div>
                </div>
            </Timeline1>
        </div>
        {/* Tools/Skills */}
        <h2 className="text-xl font-bold mt-8 mb-6 text-center md:hidden">Tools Used</h2>
        <div className="relative w-full flex flex-row flex-wrap items-center justify-center md:hidden gap-2">
            <ToolsIcon delay={0.1}>
                <img src="/assets/tools/html5.png" alt="HTML 5" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.2}>
                <img src="/assets/tools/css3.png" alt="CSS 3" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.3}>
                <img src="/assets/tools/javascript.png" alt="Javascript" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.4}>
                <img src="/assets/tools/php.png" alt="PHP" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.5}>
                <img src="/assets/tools/python.png" alt="Python" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
        </div>
        <div className="relative w-full flex flex-row flex-wrap items-center justify-center md:hidden gap-2 top-5">
            <ToolsIcon delay={0.1}>
                <img src="/assets/tools/react.png" alt="React" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.2}>
                <img src="/assets/tools/tailwindcss.png" alt="Tailwind CSS" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.3}>
                <img src="/assets/tools/flutter.png" alt="Flutter" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.4}>
                <img src="/assets/tools/mysql.png" alt="MySQL" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.5}>
                <img src="/assets/tools/figma.png" alt="Figma" className="w-10 hover:scale-110 transition"/>
            </ToolsIcon>
        </div>
        {/* desktop section */}
        <div className="hidden md:flex flex-col items-center text-center w-full">
            <h1 className="text-3xl font-bold">About</h1>
            <p className="text-gray-300 mt-3 leading-relaxed text-center mb-40" style={{ textAlign: "justify", textAlignLast: "center" }}>Saya sangat tertarik pada pembuatan sistem yang bekerja menghubungkan aplikasi web, database, dan perangkat fisik (IoT). Saat ini saya terus mengeksplorasi cara menggabungkan web development, automasi, dan kecerdasan buatan menjadi solusi yang lebih cerdas dan bermanfaat untuk client</p>
        </div>
        <div className="hidden md:flex justify-between items-center gap-10">
            {/* left */}
            <div className="w-1/2 space-y-6 relative left-[-45px]">
                <h2 className="text-xl font-bold mt-2 mb-6 text-center relative bottom-60">Personal Strengths</h2>
                <Timeline1 align="left">
                <div className="w-full flex flex-row items-center gap-2 relative bottom-60">
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md w-[47%] ml-auto hover:scale-103 transition">
                        <h2 className="font-semibold text-lg text-center">Attitude</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md w-[47%] mr-auto hover:scale-103 transition">
                        <h2 className="font-semibold text-lg text-center">Critical Thinking</h2>
                    </div>
                </div>
                </Timeline1>
                <Timeline1>
                <div className="w-full flex flex-row items-center gap-2 relative bottom-55">
                    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md w-[47%] ml-auto hover:scale-103 transition">
                        <h2 className="font-semibold text-sm text-center">Problem Solving</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md w-[47%] mr-auto hover:scale-103 transition">
                        <h2 className="font-semibold text-lg text-center">Organized</h2>
                    </div>
                </div>
                </Timeline1>
                <Timeline1>
                <div className="w-full flex flex-row items-center gap-2 relative bottom-50">
                    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md w-[47%] ml-auto hover:scale-103 transition">
                        <h2 className="font-semibold text-sm text-center">Analytic Mindset</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-md w-[47%] mr-auto hover:scale-103 transition">
                        <h2 className="font-semibold text-lg text-center">Team Work</h2>
                    </div>
                </div>
                </Timeline1>
            </div>
            {/* right */}
            <div className="w-1/2 space-y-6 relative right-[-45px]">
                <h2 className="text-xl font-bold mt-2 mb-6 text-center relative bottom-30">Education</h2>
                <div className="relative w-full flex flex-col items-center">
                    {/* line */}
                    <div className="absolute left-1/2 top-[-120px] bottom-32 w-[2px] bg-gray-600 transform -translate-x-1/2"></div>
                    {/* circle top */}
                    <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-gray-800 bottom-138 left-1/2 transform -translate-x-1/2"></div>
                    {/* item 1 */}
                    <Timeline align="left">
                    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md w-[47%] mr-auto relative bottom-30">
                        <h2 className="font-semibold text-lg">SMP Negeri 1 Cluring</h2>
                        <p className="text-xs mt-2 text-gray-300">2017 — 2020</p>
                    </div>
                    </Timeline>
                    {/* circle top */}
                    <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-gray-800 bottom-103 left-1/2 transform -translate-x-1/2"></div>
                    {/* item 2 */}
                    <Timeline align="right">
                    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md w-[47%] ml-auto relative bottom-26">
                        <h2 className="font-semibold text-lg">SMA Negeri 1 Cluring</h2>
                        <p className="text-sm mt-1">Science Major</p>
                        <p className="text-xs mt-2 text-gray-300">2020 — 2023</p>
                    </div>
                    </Timeline>
                    {/* circle top */}
                    <div className="absolute w-4 h-4 rounded-full bg-white border-4 border-gray-800 bottom-62 left-1/2 transform -translate-x-1/2"></div>
                    {/* item 3 */}
                    <Timeline align="left">
                    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-md w-[47%] mr-auto relative bottom-22">
                        <h2 className="font-semibold text-lg">Politeknik Negeri Banyuwangi</h2>
                        <p className="text-sm mt-1">Teknologi Rekayasa Komputer</p>
                        <p className="text-xs mt-2 text-gray-300">2023 — Present</p>
                    </div>
                    </Timeline>
                </div>
            </div>
        </div>
        {/* Tools/Skills */}
        <div className="hidden md:flex flex-col items-center text-center w-full">
            <h1 className="text-2xl font-bold relative">Tools Used</h1>
        </div>
        <div className="relative w-full hidden md:flex flex-row flex-wrap items-center justify-center gap-4 top-10">
            <ToolsIcon delay={0.1}>
                <img src="/assets/tools/html5.png" alt="HTML 5" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.2}>
                <img src="/assets/tools/css3.png" alt="CSS 3" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.3}>
                <img src="/assets/tools/javascript.png" alt="Javascript" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.4}>
                <img src="/assets/tools/php.png" alt="PHP" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.5}>
                <img src="/assets/tools/python.png" alt="Python" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.6}>
                <img src="/assets/tools/react.png" alt="React" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.7}>
                <img src="/assets/tools/tailwindcss.png" alt="Tailwind CSS" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.8}>
                <img src="/assets/tools/flutter.png" alt="Flutter" className="w-25 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={0.9}>
                <img src="/assets/tools/mysql.png" alt="MySQL" className="w-20 hover:scale-110 transition"/>
            </ToolsIcon>
            <ToolsIcon delay={1}>
                <img src="/assets/tools/figma.png" alt="Figma" className="w-20 hover:scale-110 transition"/>
            </ToolsIcon>
        </div>
    </section>
    )
}
export default About;