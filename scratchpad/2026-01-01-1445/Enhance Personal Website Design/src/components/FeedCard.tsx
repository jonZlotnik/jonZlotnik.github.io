import { motion } from "motion/react";
import { useState } from "react";
import { Camera, Code, Clock } from "lucide-react";

interface FeedCardProps {
  image?: string;
  title: string;
  description: string;
  type: "photography" | "project";
  date: string;
  tags?: string[];
  index: number;
}

export function FeedCard({ image, title, description, type, date, tags, index }: FeedCardProps) {
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
      {/* Image container (if image exists) */}
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </div>
      )}

      {/* Content */}
      <motion.div
        className="p-6 space-y-4"
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            {type === "photography" ? (
              <Camera className="w-4 h-4" />
            ) : (
              <Code className="w-4 h-4" />
            )}
            <span className="capitalize">{type}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-xl md:text-2xl tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-white/5 text-zinc-400 rounded-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
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
