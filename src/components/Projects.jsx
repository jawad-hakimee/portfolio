import { motion } from 'framer-motion';
import { h1, title } from 'framer-motion/client';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Gym6 Website",
            description: "A modern gym website featuring workout programs, membership plans, trainer profiles, and a responsive design for fitness enthusiasts",
            tags: ["JavaScript", "Next.js", "Tailwind"],
            image: "https://linkspaces.co.uk/wp-content/uploads/2024/05/gb-botanica-gym-link-spaces-slough.jpg"
        },
        // {
        //     title: "Task Management App",
        //     description: "A productivity tool for teams to track tasks, manage projects, and collaborate in real-time.",
        //     tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        //     color: "from-purple-500 to-pink-500"
        // },
        // {
        //     title: "Portfolio Website",
        //     description: "A modern, animated portfolio website for a creative professional.",
        //     tags: ["React", "Framer Motion", "Tailwind"],
        //     color: "from-orange-400 to-red-500"
        // }
        {
            title: "Coming Soon",
            description: "",
            tags: [],
            image: ""
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured <span className="text-gradient-purple">Projects</span></h2>
                    <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden glass hover:border-accent/30 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="h-48 w-full overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                <a href="https://github.com/jawad-hakimee/Gym6" className="p-2 bg-slate-900/80 rounded-full text-white hover:text-accent hover:bg-slate-900 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://gym6-xi.vercel.app/" className="p-2 bg-slate-900/80 rounded-full text-white hover:text-accent hover:bg-slate-900 transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="p-6 relative">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
