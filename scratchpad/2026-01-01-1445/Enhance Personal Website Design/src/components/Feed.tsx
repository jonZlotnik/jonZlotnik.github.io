import { FeedCard } from "./FeedCard";
import { motion } from "motion/react";
import imgDsc11831 from "figma:asset/fbd3f95e2fb881105cbf6425e92028cda470288f.png";
import imgDsc11832 from "figma:asset/a7b79cd2e7ca09af43025f39427ba0cf85360992.png";
import imgDsc11833 from "figma:asset/54d2091cbf4f9a40ee941f4a7e9dafa22f626fd1.png";

const feedItems = [
  {
    image: imgDsc11831,
    title: "Bees on Ile-Bizard",
    description: "Captured with my 55mm Nikkor Micro f/2.8 during a walk along the Parc Ile-Bizard trails. A field of white buzzing flowers made for perfect macro photography practice.",
    type: "photography" as const,
    date: "December 2025",
    tags: ["macro", "nature", "photography"]
  },
  {
    title: "Encrypted Messaging Protocol",
    description: "Built a lightweight end-to-end encrypted messaging protocol using modern cryptographic primitives. Implements forward secrecy and deniable authentication.",
    type: "project" as const,
    date: "November 2025",
    tags: ["cryptography", "security", "go"]
  },
  {
    image: imgDsc11832,
    title: "Small jumps, blind horse",
    description: "An afternoon at the stables capturing the grace and power of these magnificent animals in motion.",
    type: "photography" as const,
    date: "October 2025",
    tags: ["photography", "animals", "sports"]
  },
  {
    title: "Zero-Knowledge Authentication System",
    description: "Implemented a zero-knowledge proof system for authentication without revealing passwords. Uses Schnorr protocols and elliptic curve cryptography.",
    type: "project" as const,
    date: "September 2025",
    tags: ["zkp", "cryptography", "rust"]
  },
  {
    image: imgDsc11833,
    title: "In the park",
    description: "Sunday morning light filtering through the trees at the local park. Sometimes the best shots are the ones closest to home.",
    type: "photography" as const,
    date: "August 2025",
    tags: ["photography", "landscape", "nature"]
  },
  {
    title: "Homomorphic Encryption Library",
    description: "Working on a practical homomorphic encryption library that allows computations on encrypted data. Still experimental but showing promising results.",
    type: "project" as const,
    date: "July 2025",
    tags: ["cryptography", "python", "research"]
  }
];

export function Feed() {
  return (
    <section id="feed" className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Projects & Photography</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8">
            A collection of my hobby projects, experiments in cryptography, and photography adventures
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
        </motion.div>

        {/* Feed grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {feedItems.map((item, index) => (
            <FeedCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
