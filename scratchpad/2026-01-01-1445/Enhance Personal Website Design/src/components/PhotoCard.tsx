import { motion } from "motion/react";
import { useState } from "react";

interface PhotoCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export function PhotoCard({ image, title, description, index }: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-sm bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <motion.div
        className="p-6 space-y-3"
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-xl md:text-2xl tracking-tight">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Subtle corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}
