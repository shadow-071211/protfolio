import { motion } from 'framer-motion';
import { Github, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-32 pb-24 bg-zinc-950 flex relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center justify-center">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        Get in <span className="text-indigo-400">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400 max-w-2xl mx-auto"
                    >
                        Whether you have a question, a project idea, or just want to say hi,
                        feel free to reach out through any of the platforms below!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    <motion.a
                        href="https://github.com/shadow-071211"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group flex flex-col items-center p-8 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-zinc-700 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)]"
                    >
                        <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Github className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                        <p className="text-zinc-400 text-center">Check out my open source projects and contributions.</p>
                        <span className="mt-6 text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">@shadow-071211 →</span>
                    </motion.a>

                    <motion.a
                        href="https://www.instagram.com/shadow__tech/"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group flex flex-col items-center p-8 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-pink-500/30 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(236,72,153,0.15)]"
                    >
                        <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Instagram className="w-8 h-8 text-pink-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                        <p className="text-zinc-400 text-center">Follow me for tech content, updates, and behind the scenes.</p>
                        <span className="mt-6 text-sm font-semibold text-pink-400 group-hover:text-pink-300 transition-colors">@shadow__tech →</span>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/918208423177"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group flex flex-col items-center p-8 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-green-500/30 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(34,197,94,0.15)]"
                    >
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                        <p className="text-zinc-400 text-center">Send me a direct message for a quicker response.</p>
                        <span className="mt-6 text-sm font-semibold text-green-400 group-hover:text-green-300 transition-colors">Message Me →</span>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
