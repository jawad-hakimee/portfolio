import { motion } from 'framer-motion';
import { h1, title } from 'framer-motion/client';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Abdal Azami Official Website",
            description: "Abdal Azami Official Website offers elegant, high-quality Skechers Shoes designed for comfort, and everyday wear.",
            tags: ["Wordpress", "Woocommerce", "Responsive Design", "SEO Optimization", "Security Optimization"],
            image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&auto=format&fit=crop&q=80",
            githubLink: "https://abdashoes.com/",
            liveLink: "https://abdashoes.com/"
        },
        ,
        {
            title: "Edvora Tech",
            description: "Empowering students with flexible online learning, expert guidance, and interactive educational resources.",
            tags: ["Laravel", "PHP", "MySQL", "Responsive Design", "JavaScript", "API Integration", "Security Optimization", "REST API", "JWT Authentication"],
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
            githubLink: "https://edvoratech.com/",
            liveLink: "https://edvoratech.com/"
        },
        {
            title: "Alone Hijab Website",
            description: "Alone Hijab Store offers elegant, high-quality hijabs designed for comfort, modesty, and everyday wear.",
            tags: ["Next.js", "Responsive Design", "JavaScript", "Tailwind"],
            image: "https://t4.ftcdn.net/jpg/04/42/52/59/360_F_442525963_7F1PYJnhv0ABoiXO6o1KSmeAKgJt0dJf.jpg",
            githubLink: "https://github.com/jawad-hakimee/Alone-Hijab",
            liveLink: "https://alone-hijab-scon.vercel.app/"
        },
        {
            title: "CodeWeekend Members",
            description: "CodeWeekend Community Members is a platform that helps members connect with each other and share their experiences.",
            tags: ["JavaScript", "Next.js", "Tailwind"],
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
            liveLink: "https://code-weekend-community-members-2023.netlify.app/"
        },
        {
            title: "Alone Gym6 Website",
            description: "A modern gym website featuring workout programs, membership plans, trainer profiles, and a responsive design for fitness enthusiasts",
            tags: ["JavaScript", "Next.js", "Tailwind"],
            image: "https://linkspaces.co.uk/wp-content/uploads/2024/05/gb-botanica-gym-link-spaces-slough.jpg",
            githubLink: "https://github.com/jawad-hakimee/Gym6",
            liveLink: "https://gym6-xi.vercel.app/"
        },
        {
            title: "JK Online Store",
            description: "JK Online Store provides convenient online shopping with quality products, competitive prices, secure transactions, and reliable customer service.",
            tags: ["JavaScript", "React", "Tailwind"],
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1974&auto=format&fit=crop",
            githubLink: "#",
            liveLink: "https://jk-online-store.netlify.app/"
        },
        {
            title: "Coming Soon",
            description: "New exciting projects are on the way. Stay tuned!",
            tags: ["Future"],
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
            githubLink: "#",
            liveLink: "#"
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
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900/80 rounded-full text-white hover:text-accent hover:bg-slate-900 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900/80 rounded-full text-white hover:text-accent hover:bg-slate-900 transition-colors">
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
