import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { Check, Copy } from 'lucide-react';
import { useCursorStore } from '../store';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { setCursorVariant } = useCursorStore();

  const handleCopy = () => {
    navigator.clipboard.writeText('muhammedayaan213@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer 
      className="fixed bottom-0 left-0 w-full h-screen min-h-[600px] bg-[#0a0a0a] text-white flex flex-col justify-between p-10 md:p-20 -z-10"
      onMouseEnter={() => setCursorVariant('default')}
    >
      <div className="flex justify-between items-start">
        <div className="text-sm font-mono text-gray-500">
          <p>KARACHI, PK</p>
          <p className="text-neon">{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' })}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-mono text-gray-500 mb-4">SOCIALS</p>
          <div className="flex flex-col gap-2 items-end">
            {['LinkedIn', 'GitHub', 'Fiverr', 'Twitter'].map((link) => (
              <MagneticButton key={link}>
                <a href="#" className="text-lg hover:text-neon transition-colors">{link}</a>
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div 
          className="group cursor-pointer" 
          onClick={handleCopy}
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <p className="text-sm font-mono text-gray-500 mb-2">HAVE AN IDEA?</p>
          <h2 className="text-6xl md:text-9xl font-display font-bold leading-none group-hover:text-neon transition-colors duration-500">
            START A<br />PROJECT
          </h2>
        </div>
        
        <div className="flex justify-between items-end border-t border-white/10 pt-10">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            muhammedayaan213@gmail.com
            {copied ? <Check size={16} className="text-neon" /> : <Copy size={16} />}
          </button>
          <p className="text-sm text-gray-600">© 2024 MUHAMMAD AYAAN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
