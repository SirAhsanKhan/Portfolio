import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2c2e32] to-[#1f2937] text-[#e5e7eb] py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        
        {/* About Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2 text-[#fbbf24]">Ahsan Khan</h3>
          <p>Your future full-stack developer, making web solutions.</p>
        </div>
        
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2 text-[#fbbf24]">Quick Links</h4>
          <ul className="flex flex-col space-y-2 ">
            <li className='hover:text-[#fbbf24]'><Link href="/">Home</Link></li>
            <li className='hover:text-[#fbbf24]'><Link href="/projects">Projects</Link></li>
            <li className='hover:text-[#fbbf24]'><Link href="/about">About</Link></li>
            <li className='hover:text-[#fbbf24]'><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2  text-[#fbbf24]">Get in Touch</h4>
          <form className="flex flex-col space-y-2">
            <input className="p-2 rounded bg-[#141415] text-[#e5e7eb]" type="text" placeholder="Name" />
            <input className="p-2 rounded bg-[#141415] text-[#e5e7eb]" type="email" placeholder="Email" />
            <textarea className="p-2 rounded bg-[#141415] text-[#e5e7eb]" rows ={3} placeholder="Message"></textarea>
            <button className="bg-[#fbbf24] text-[#1a2335] font-bold py-2 rounded">Send</button>
          </form>
        </div>

      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mt-8">
        <a className="hover:text-[#fbbf24]" href="https://www.linkedin.com/in/ahsan-khan-6a8b902b4/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        <a className="hover:text-[#fbbf24]" href="https://github.com/SirAhsanKhan" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
      </div>

      {/* Copyright */}
      <p className="text-center mt-8 text-sm hover: text-[#fbbf24]">
        © 2024 Ahsan Khan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
