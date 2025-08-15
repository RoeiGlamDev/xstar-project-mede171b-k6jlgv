import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    companyName: string;
    links: Array<{ title: string; url: string; }>;
    socialMedia: Array<{ platform: string; url: string; icon: JSX.Element; }>;
}

const Footer: React.FC<FooterProps> = () => {
    const companyName = "luxury LRP cosmetics";
    const links = [
        { title: 'Home', url: '/' },
        { title: 'Products', url: '/products' },
        { title: 'About Us', url: '/about' },
        { title: 'Contact', url: '/contact' },
        { title: 'Privacy Policy', url: '/privacy' },
    ];

    const socialMedia = [
        { platform: 'Facebook', url: 'https://facebook.com/luxuryLRP', icon: <i className="fab fa-facebook-f"></i> },
        { platform: 'Instagram', url: 'https://instagram.com/luxuryLRP', icon: <i className="fab fa-instagram"></i> },
        { platform: 'Twitter', url: 'https://twitter.com/luxuryLRP', icon: <i className="fab fa-twitter"></i> },
    ];

    return (
        <footer className="bg-white text-orange-600 py-8">
            <div className="container mx-auto text-center">
                <motion.div 
                    className="text-2xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {companyName}
                </motion.h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                    {links.map(link => (
                        <motion.div 
                            key={link.title}
                            href={link.url}
                            className="text-lg hover:text-orange-400 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.title}
                        </motion.a>
                    ))}
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex justify-center space-x-4 mt-2">
                        {socialMedia.map(social => (
                            <motion.div 
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-400 transition duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
                <div className="mt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
                    <p className="mt-1">Luxury cosmetics for the discerning individual.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;