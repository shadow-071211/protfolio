import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with payment gateway integration, admin dashboard, and user authentication.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 2,
        title: 'Fintech Dashboard',
        description: 'A responsive dashboard for tracking financial metrics with real-time charts and dark mode optimization.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'Tailwind', 'Recharts'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'A premium MERN stack portfolio with glassmorphism design, animated sections, and automated Gmail inquiry notifications.',
        image: '/portfolio.png',
        tags: ['React', 'Node.js', 'Framer Motion', 'Tailwind'],
        demoUrl: '#',
        githubUrl: 'https://github.com/shadow-071211/protfolio',
    },
    {
        id: 4,
        title: 'Social Media App',
        description: 'A full-featured social platform with real-time chat, notifications, and media sharing capabilities.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
        tags: ['MERN', 'Socket.io', 'Redux'],
        demoUrl: '#',
        githubUrl: '#',
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-zinc-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Featured <span className="text-indigo-400">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        A selection of my recent work showcasing modern web technologies and user-centric design principles.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-indigo-500/50 transition-colors duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 relative z-20 bg-zinc-900">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <Github className="w-4 h-4" /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
