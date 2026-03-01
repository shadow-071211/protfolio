import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Briefcase, Home, LayoutGrid, Instagram, MessageCircle } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
        { name: 'Projects', path: '/#projects', icon: <LayoutGrid className="w-4 h-4" /> },
        { name: 'Hire Me', path: '/hire', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Contact Us', path: '/contact', icon: <MessageCircle className="w-4 h-4" /> },
    ];

    const handleScrollToProjects = (e) => {
        if (location.pathname === '/' && e.target.getAttribute('href') === '/#projects') {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/70 backdrop-blur-lg border-b border-zinc-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0"
                    >
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/profile logo.jpeg" alt="Shadow Logo" className="w-10 h-10 object-contain rounded-full border border-indigo-500/30" />
                            <span className="text-2xl font-bold tracking-tighter text-cyan-400">
                                Shadow
                            </span>
                        </Link>
                    </motion.div>

                    <div className="hidden md:block">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="ml-10 flex items-baseline space-x-8"
                        >
                            {links.map((link) => (
                                link.external ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="group-hover:text-indigo-400 transition-colors">{link.icon}</span>
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={link.path === '/#projects' ? handleScrollToProjects : undefined}
                                        className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="group-hover:text-indigo-400 transition-colors">{link.icon}</span>
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </motion.div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                link.external ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
                                    >
                                        {link.icon} {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={handleScrollToProjects}
                                        className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
                                    >
                                        {link.icon} {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
