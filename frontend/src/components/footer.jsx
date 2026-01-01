import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-12 px-6 mt-30">

      {/* ===== DESKTOP VERSION ===== */}
      
      <div className="hidden md:flex max-w-7xl mx-auto justify-center">

        {/* LEFT */}
        <div className="text-center max-w-md">
          <h2 className="text-xl font-bold">GRAPHICODE.TECH</h2>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            GRAPHICODE is my personal portfolio as a Full Stack Developer, focusing on frontend development, UI/UX design, and IoT solutions to build modern, efficient, and user-centered digital products.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <a href="https://www.linkedin.com/in/agung-bangkit-tri-admojo-6285422a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:scale-130 transition"><FaLinkedin /></a>
          <a href="https://github.com/agungbgkt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnFQGq7xpnFQJerbuVsVQ9YgEx2-PQqCM1yFFmylXx0q-5fMRsCweDUs58Bvg_aem_A7MbPZEZrfeJmekAc6Sghw" className="hover:scale-130 transition"><FaGithub /></a>
          <a href="https://www.instagram.com/agungbgkt?igsh=MWwzYnp2M3MyYWltcg==" className="hover:scale-130 transition"><FaInstagram /></a>
          <a href="https://x.com/agbtta" className="hover:scale-130 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>



      {/* ===== MOBILE VERSION ===== */}
      <div className="md:hidden max-w-md mx-auto text-center space-y-8">

        <h2 className="text-xl font-bold">GRAPHICODE.TECH</h2>

        {/* Social Icons mobile */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <a href="https://www.linkedin.com/in/agung-bangkit-tri-admojo-6285422a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-amber-400"><FaLinkedin /></a>
          <a href="https://github.com/agungbgkt?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnFQGq7xpnFQJerbuVsVQ9YgEx2-PQqCM1yFFmylXx0q-5fMRsCweDUs58Bvg_aem_A7MbPZEZrfeJmekAc6Sghw" className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-amber-400"><FaGithub /></a>
          <a href="https://www.instagram.com/agungbgkt?igsh=MWwzYnp2M3MyYWltcg==" className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-amber-400"><FaInstagram /></a>
          <a href="https://x.com/agbtta" className="w-10 h-10 rounded-full border flex items-center justify-center hover:text-amber-400"><FaTwitter /></a>
        </div>
      </div>


      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-10">
        Copyright © 2025 Graphicode.tech | Powered by Graphicode.tech
      </div>
    </footer>
  );
}
