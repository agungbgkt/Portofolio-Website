import {motion} from "framer-motion";

function Contact(){
    return(
        <section id="contact" className="min-h-screen w-full text-white pt-28 md:pt-32 px-6 md:px-14 mt-20">
            {/* mobile section */}
            <div className="md:hidden flex flex-col items-center text-center mt-0">
                <h2 className="text-3xl font-bold">Contact</h2>
            </div>
            <div className="bg-gray-600 border border-gray-900 p-5 rounded-sm w-full mt-4 md:hidden">
                <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                {/* form box */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                    viewport={{once: true}}
                    className="bg-transparent border-white p-4 rounded-2xl shadow-lg space-y-3 mt-3"
                >
                    <input type="text" placeholder="Your Name" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none" />
                    <input type="text" placeholder="Subject" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none" />
                    <textarea name="Message" id="#" rows="4" placeholder="Type Here" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none"></textarea>

                    <button className="w-full py-3 bg-amber-400 text-black font-semibold rounded-xl hover:bg-amber-300 transition">Send Message</button>
                </motion.div>
            </div>
            
            {/* desktop section */}
            <div className="hidden md:flex flex-col items-center text-center w-full relative">
                <h2 className="text-3xl font-bold">Contact</h2>
            </div>
            {/* box */}
            <div className="hidden md:flex justify-between items-start gap-10 relative top-15">
                {/* form box */}
                <div className="bg-gray-600 border border-gray-900 p-5 rounded-sm w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        viewport={{once: true}}
                        className="bg-transparent border-white p-4 rounded-2xl shadow-lg space-y-3 mt-3"
                    >
                        <input type="text" placeholder="Your Name" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none" />
                        <input type="email" placeholder="Your Email" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none" />
                        <input type="text" placeholder="Subject" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none" />
                        <textarea rows="4" placeholder="Type Here" className="w-full p-3 bg-transparent border border-white rounded-xl outline-none"></textarea>

                        <button className="w-full py-3 bg-amber-400 text-black font-semibold rounded-xl hover:bg-amber-300 transition">Send Message</button>
                    </motion.div>
                </div>
                {/* contact info */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2, ease: "easeOut"}}
                    viewport={{once: true}}
                    className="bg-black/40 border border-gray-700 p-10 rounded-sm w-full md:w-1/2 shadow-lg space-y-10"
                >

                {/* Row 1: Phone & Email */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col items-center gap-2 relative left-5">
                            <img src="/assets/contact/phone.png" alt="Phone" className="w-10 h-10 hover:scale-110 transition" />
                            <p className="text-sm font-semibold">Phone Number</p>
                            <p className="text-sm">+62812 3045 4712</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 relative right-5">
                            <img src="/assets/contact/email.png" alt="Email" className="w-10 h-10 hover:scale-110 transition" />
                            <p className="text-sm font-semibold">Email Address</p>
                            <p className="text-sm">aestheticsoccer01@gmail.com</p>
                        </div>
                    </div>

                {/* Row 2: Whatsapp & Location */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col items-center gap-2 relative left-5">
                            <img src="/assets/contact/whatsapp.png" alt="Whatsapp" className="w-10 h-10 hover:scale-110 transition" />
                            <p className="text-sm font-semibold">Whatsapp</p>
                            <p className="text-sm">+62812 3045 4712</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 relative right-5">
                            <img src="/assets/contact/location.png" alt="Location" className="w-10 h-10 hover:scale-110 transition" />
                            <p className="text-sm font-semibold">Location</p>
                            <p className="text-sm">68482 Cluring, Banyuwangi</p>
                        </div>
                    </div>

                {/* Map */}
                <div className="w-full mt-6 rounded-xl overflow-hidden h-35">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d31575.554885077567!2d114.23123360518808!3d-8.407125709420677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1765204039368!5m2!1sen!2sid"
                        style={{border: 0, width: "100%", height: "300px"}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0"
                    ></iframe>
                </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Contact;