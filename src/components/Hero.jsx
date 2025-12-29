import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium text-sm mb-6">
                        Available for Freelance Work
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm <br />
                        <span className="text-gradient">Jawad Hakimi</span>
                    </h1>
                    <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                        A passionate <span className="text-white font-medium">Web Developer</span> specializing in building modern, high-performance websites and web applications with focus on user experience.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-glow hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/25 flex items-center gap-2">
                            View Work <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#contact" className="px-8 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <span className="text-slate-500 text-sm font-medium">Connect on:</span>
                        <div className="flex gap-4">
                            <a href="https://github.com/JawadHakimee" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 group">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/jawad-hakimi-061a512a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 group">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract visual made with CSS only, placeholder for profile image later */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-full opacity-20 animate-pulse blur-3xl"></div>
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass border-white/10 p-4">
                            <div className="w-full h-full bg-slate-900/50 rounded-xl relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-code text-sm">
                                    {/* Code Snippet Decoration */}
                                    <pre className="text-xs md:text-sm p-6 text-left">
                                        <code className="language-javascript">
                                            {`const developer = {
  name: "Jawad Hakimi",
  role: "Web Developer",
  skills: [
    "React",
    "Node.js",
    "Tailwind",
    "UI/UX"
  ],
  status: "Ready to build"
};`}
                                        </code>
                                    </pre>
                                </div>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
