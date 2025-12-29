import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-accent">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>

                        <div className="space-y-6 text-slate-400">
                            <p className="leading-relaxed">
                                I am <strong className="text-white">Jawad Hakimi</strong>, a Full-Stack Web Developer with over 3 years of
                                experience, specializing in creating secure, high-performance, and responsive websites.
                            </p>
                            <p className="leading-relaxed">
                                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing my knowledge with the community. I believe in continuous learning and staying up-to-date with the latest trends in web development.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-10">
                            <div className="glass p-4 rounded-xl text-center hover:bg-accent/5 transition-colors">
                                <h3 className="text-3xl font-bold text-gradient mb-1">3+</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="glass p-4 rounded-xl text-center hover:bg-accent/5 transition-colors">
                                <h3 className="text-3xl font-bold text-gradient mb-1">7+</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">Projects Done</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative z-10 glass-card p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-6">What I Do</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Web Development</h4>
                                        <p className="text-sm text-slate-400">Building fast, secure, and scalable websites from scratch using modern technologies.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">UI/UX Design</h4>
                                        <p className="text-sm text-slate-400">Designing intuitive and user-centered interfaces that look great and feel amazing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Responsive Design</h4>
                                        <p className="text-sm text-slate-400">Ensuring your website looks perfect on all devices, from mobile phones to large desktops.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
