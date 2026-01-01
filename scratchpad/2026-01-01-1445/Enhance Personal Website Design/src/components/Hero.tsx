import { motion } from "motion/react";
import { Github, Linkedin, MessageCircle, Send } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black opacity-50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight">
            Jon Zlotnik
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
            Software Engineer & Applied Cryptographer
          </p>
          <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-2xl mx-auto">
            Information Security Expert
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <SocialLink href="https://t.me/username" icon={Send} label="Telegram" />
          <SocialLink href="https://wa.me/1234567890" icon={MessageCircle} label="WhatsApp" />
          <SocialLink href="https://github.com" icon={Github} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#feed"
            className="inline-block px-8 py-3 border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded-sm group"
          >
            <span className="inline-flex items-center gap-2">
              View My Work
              <motion.span
                className="inline-block"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}