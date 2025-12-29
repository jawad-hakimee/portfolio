import { Code2, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-accent" />
                    <span className="font-heading font-bold text-lg text-white">Jawad</span>
                </div>

                <p className="text-slate-500 text-sm flex items-center gap-1 justify-center md:justify-start">
                    Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Jawad Hakimi © {new Date().getFullYear()}
                </p>

                <div className="flex gap-6 text-sm text-slate-500">
                    <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
