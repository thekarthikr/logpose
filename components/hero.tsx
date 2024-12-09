"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const FadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="pointer-events-none relative mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center"
    >
      <div className="z-10 inline-block space-y-8">
        <motion.h1 variants={FadeUp} className="text-4xl md:text-7xl">
          Hi, I&apos;m Karthik, <br /> A frontend Developer
        </motion.h1>
        <motion.p
          variants={FadeUp}
          className="text-md max-w-xl text-foreground/50 md:text-xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officiis iure vero incidunt, ipsa at consectetur fugit id corporis
          consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Sed, nesciunt!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
