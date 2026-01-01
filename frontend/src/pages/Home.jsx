import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="min-h-screen w-full text-white pt-28 md:pt-32 px-6 md:px-14">

      {/* ===== MOBILE VERSION ===== */}
      <div className="md:hidden flex flex-col items-center text-center">
        <h1 className="text-lg font-semibold">Halo semuanya👋 saya <br />
          <span className="text-2xl font-bold text-white">Agung Bangkit Tri Admojo</span>
        </h1>
        <h2 className="text-lg font-medium mt-2">Mahasiswa | Politeknik Negeri Banyuwangi</h2>
        <p className="text-gray-300 mt-3 leading-relaxed text-center">Berfokus mengembangkan aplikasi web cerdas dan solusi IoT yang inovatif, dengan dukungan keahlian yang kuat dalam engineering jaringan dan integrasi sistem.</p>
        {/* Foto mobile */}
        <div className="relative w-48 h-48 mt-6">
          <img src="/assets/image/profil.jpg" alt="profile" className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"/>
        </div>
        {/* Follow me */}
        <div className="flex gap-4 mt-5">
          <a href="https://www.linkedin.com/in/agung-bangkit-tri-admojo-6285422a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 rounded-full border flex items-center justify-center hover:scale-110 transition"><FaLinkedin /></a>
          <a href="https://github.com/agungbgkt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnFQGq7xpnFQJerbuVsVQ9YgEx2-PQqCM1yFFmylXx0q-5fMRsCweDUs58Bvg_aem_A7MbPZEZrfeJmekAc6Sghw" className="w-10 h-10 rounded-full border flex items-center justify-center hover:scale-110 transition"><FaGithub /></a>
          <a href="https://www.instagram.com/agungbgkt?igsh=MWwzYnp2M3MyYWltcg==" className="w-10 h-10 rounded-full border flex items-center justify-center hover:scale-110 transition"><FaInstagram /></a>
          <a href="https://x.com/agbtta" className="w-10 h-10 rounded-full border flex items-center justify-center hover:scale-110 transition"><FaTwitter /></a>
        </div>
        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-6 w-full">
          <a href="#projects" className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 transition-all">Explore Project</a>
          <a href="/assets/image/CV.jpg" download="Agung-Bangkit-CV.jpg" className="px-6 py-3 border border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-black transition-all">Download CV</a>
        </div>
      </div>
      {/* ===== DESKTOP VERSION ===== */}
      <div className="hidden md:flex justify-between items-center gap-10 mt-30">
        
        {/* Left text */}
        <div className="w-1/2 space-y-6 relative left-[-45px]">
          <h1 className="text-xl font-semibold">
            Halo semuanya👋 saya <br />
            <span className="text-4xl font-bold text-white mt-4">
              Agung Bangkit Tri Admojo
            </span>
            <p className="text-2xl font-medium mt-3">Mahasiswa | Politeknik Negeri Banyuwangi</p>
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-lg">
            Berfokus mengembangkan aplikasi web cerdas dan solusi IoT yang inovatif,
            dengan dukungan keahlian yang kuat dalam engineering jaringan dan integrasi sistem.
          </p>

          {/* Follow desktop */}
          <div className="flex items-center gap-4">
            <p className="text-sm tracking-wide">Follow me on:</p>
            <div className="flex gap-3 text-xl">
              <a href="https://www.linkedin.com/in/agung-bangkit-tri-admojo-6285422a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:scale-110 transition"><FaLinkedin /></a>
              <a href="https://github.com/agungbgkt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnFQGq7xpnFQJerbuVsVQ9YgEx2-PQqCM1yFFmylXx0q-5fMRsCweDUs58Bvg_aem_A7MbPZEZrfeJmekAc6Sghw" className="hover:scale-110 transition"><FaGithub /></a>
              <a href="https://www.instagram.com/agungbgkt?igsh=MWwzYnp2M3MyYWltcg==" className="hover:scale-110 transition"><FaInstagram /></a>
              <a href="https://x.com/agbtta" className="hover:scale-110 transition"><FaTwitter /></a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl shadow-md hover:bg-amber-400">
              Explore Project
            </a>
            <a href="/assets/image/CV.jpg" download="Agung-Bangkit-CV.jpg" className="px-6 py-3 border border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-black">
              Download CV
            </a>
          </div>
        </div>

        {/* Right photo desktop */}
        <div className="w-1/2 flex justify-center">
          <div className="w-80 h-80">
            <img
              src="/assets/image/profil.jpg"
              alt="profile"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute bottom-35 right-75 bg-white border border-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg hover:scale-110 transition"> <img src="/assets/tools/figma.png" alt="Figma" className="w-8"/></div>
          <div className="absolute top-80 right-60 bg-white border border-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg hover:scale-110 transition"> <img src="/assets/tools/react.png" alt="React" className="w-8"/> </div>
          <div className="absolute top-60 left-220 bg-white border border-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg hover:scale-110 transition"> <img src="/assets/tools/flutter.png" alt="Flutter" className="w-8"/> </div>
          <div className="absolute bottom-50 left-200 bg-white border border-white w-12 h-12 flex justify-center items-center rounded-full shadow-lg hover:scale-110 transition"> <img src="/assets/tools/mysql.png" alt="MySQL" className="w-8"/> </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
