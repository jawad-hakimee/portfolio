import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [

        { name: "JavaScript", level: "Expert" },
        { name: "React", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Laravel", level: "Expert" },
        { name: "PHP", level: "Expert" },
        { name: "Wordpress", level: "Expert" },
        { name: "SEO Optimization", level: "Expert" },
        { name: "Security Optimization", level: "Expert" },
        { name: "Woocommerce", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "RestAPI", level: "Expert" },
        { name: "JWT Auth", level: "Expert" },
        { name: "MySQL", level: "Expert" },
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "NoSQL", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "AWS", level: "Beginner" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Technologies I work with to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.5)' }}
                            className="glass p-6 rounded-xl flex flex-col items-center justify-center gap-3 border border-white/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <span className="text-lg font-bold text-slate-300 group-hover:text-accent transition-colors">
                                    {skill.name.charAt(0)}
                                </span>
                            </div>
                            <h3 className="font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
