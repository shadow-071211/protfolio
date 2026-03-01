import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wide border border-indigo-500/20 mb-6"
                        >
                            Available for Freelance
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
                        >
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                Shadow
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-base md:text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed space-y-4"
                        >
                            <p className="text-zinc-300 font-medium">Full-Stack Developer | MERN Specialist | Performance-Driven Code</p>
                            <p>Need a scalable backend for your next MVP? I’m a CSE student with a deep focus on the MERN stack. I help startups and individuals build fast, secure, and reliable web applications.</p>

                            <p className="text-zinc-300 font-medium mt-6 mb-2">What I bring to your project:</p>
                            <ul className="space-y-2 pl-4 border-l-2 border-indigo-500/30">
                                <li><strong className="text-indigo-400 font-semibold">Backend Mastery:</strong> Efficient API development with Node.js & Express.</li>
                                <li><strong className="text-indigo-400 font-semibold">Database Design:</strong> Structured and optimized MongoDB schemas.</li>
                                <li><strong className="text-indigo-400 font-semibold">Modern Workflow:</strong> Clean documentation, Git version control, and timely delivery.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                to="/hire"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] group"
                            >
                                Let's Talk
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                            <div className="absolute inset-2 bg-zinc-900 rounded-[2rem] border border-zinc-800 overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
                                <img
                                    src="/hello.webp"
                                    alt="Shadow Profile"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105 hover:scale-100"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
