"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

const heroContent = {
  intro: {
    title: "Welcome to O.I.A Environmental Services",
    subTitle: "Your Trusted Partner in Cleaning and Environmental Solutions",
    description:
      "We are dedicated to providing top-notch cleaning services with a commitment to environmental responsibility. Our team of professionals is here to ensure your spaces are not only clean but also environmentally friendly. Discover the difference with O.I.A Environmental Services.",
    btn: {
      href: "/projects",
      label: "View Projects",
    },
  },
};
const Hero = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);
  console.log("Title:", heroContent.intro.title);
  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between">
          <div className="lg:w-4/12 z-[3] relatiive">
            {heroContent.intro.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
              >
                {heroContent.intro.subTitle}
              </motion.span>
            )}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
              >
                {heroContent.intro.title}
              </motion.h1>
            )}
  {heroContent.intro.description && (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    }}
    viewport={{ once: true }}
    className="leading-relaxed w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-10 lg:mb-16"
    style={{
      background: 'linear-gradient(135deg, #333333, #000000)', // Gradient from dark gray to black
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    {heroContent.intro.description}
  </motion.p>
)}


            {heroContent.intro.btn.label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={heroContent.intro.btn.href}
                  className="transition-all duration-300 ease-in-out text-[11.5px] 
                    treacking-[2px] font-bold uppercase bg-green-600 py-4 px-5 
                    text-white inline-block hover:bg-white hover:text-green-600 hover:shadow-2xl"
                >
                  {heroContent.intro.btn.label}
                </Link>
              </motion.p>
            )}
          </div>

          <div className="lg:w-6/12 relative"> {/* Adjusted container width */}
    <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.4, 
                duration: 0.5,
            }
        }}
        viewport={{ once: true }}
        style={{ y: imgScroll1 }}
        className="z-[2] relative bg-cover bg-center"
    >
        <Image src="/images/ashwini-chaudhary-monty-Iu6parQAO-U-unsplash.jpg" width={640} height={760} alt="Hero-Image" /> {/* Adjusted image width */}
    </motion.div>
    

            <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                 delay: 0.4, 
                 duration: 0.5,
                }
            }}
            viewport={{ once: true }}
            style={{y:imgScroll2}}
             className="absolute botto-0 lg:bottom-[200px] -left-[100px] z-[1]">
              <img src="/images/dots.svg" alt="Dots Decoration" width={200} height={200} className="w-64" style={{ fill: 'black !important'  }}/>
            </motion.div>
       
            
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
