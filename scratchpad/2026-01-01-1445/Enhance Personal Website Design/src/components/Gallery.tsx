import { PhotoCard } from "./PhotoCard";
import { motion } from "motion/react";
import imgDsc11831 from "figma:asset/fbd3f95e2fb881105cbf6425e92028cda470288f.png";
import imgDsc11832 from "figma:asset/a7b79cd2e7ca09af43025f39427ba0cf85360992.png";
import imgDsc11833 from "figma:asset/54d2091cbf4f9a40ee941f4a7e9dafa22f626fd1.png";

const photos = [
  {
    image: imgDsc11831,
    title: "Bees on Ile-Bizard.",
    description: "Avi and I took a walk along the Parc Ile-Bizard trails. My 55mm Nikkor Micro f/2.8 was attached when we fell upon a field of white buzzing flowers."
  },
  {
    image: imgDsc11832,
    title: "Small jumps, blind horse.",
    description: "Avi and I took a walk along the Parc Ile-Bizard trails. My 55mm Nikkor Micro f/2.8 was attached when we fell upon a field of white buzzing flowers."
  },
  {
    image: imgDsc11833,
    title: "In the park.",
    description: "Avi and I took a walk along the Parc Ile-Bizard trails. My 55mm Nikkor Micro f/2.8 was attached when we fell upon a field of white buzzing flowers."
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Portfolio</h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
        </motion.div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {photos.map((photo, index) => (
            <PhotoCard key={index} {...photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
