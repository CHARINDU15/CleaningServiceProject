"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
const aboutContent = {
  heading: {
    title: "Unveiling Our Journey",
    subTitle: "About Us",
  },
  content: {
    img: "/path/to/your/image.jpg",
    title: "Embark on a Clean Revolution",
    description:"At O.I.A Environmental Services, we don't just clean – we create immaculate spaces with an unwavering commitment to environmental stewardship. Our journey is a testament to excellence, and we take pride in being your trusted partner in elevating cleanliness to an art form.At O.I.A Environmental Services, we don't just clean – we create immaculate spaces with an unwavering commitment to environmental stewardship. Our journey is a testament to excellence, and we take pride in being your trusted partner in elevating cleanliness to an art form.At O.I.A Environmental Services, we don't just clean – we create immaculate spaces with an unwavering commitment to environmental stewardship. Our journey is a testament to excellence, and we take pride in being your trusted partner in elevating cleanliness to an art form.",
    
      
    
      btn: {
      href: "/about",
      label: "Discover Our Essence",
    },
  },
};

const Aboutus = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]">
          {aboutContent.heading.subTitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
            >
              {aboutContent.heading.subTitle}
            </motion.span>
          )}

          {aboutContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl"
            >
              {aboutContent.heading.title}
            </motion.h2>
          )}
        </div>
        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/cleaning-text-surrounded-with-equipments-blackboard.jpg"
                  className="object-cover !w-full  !h-[550px] lg:max-w-2xl object-center"
                  width={400}
                  height={600}
                  alt="about image"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                style={{ y: img2 }}
                className="absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]"
              >
                <Image
                  src={"/images/dots.svg"}
                  alt="dot Image"
                  width={200}
                  height={200}
                  className="w-64"
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-800"
              >
                {aboutContent.content.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-gray-500 "
              >
                {aboutContent.content.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href="/about"
                  className="transition-all duration-300 ease-in-out text-[11.5px] 
                    treacking-[2px] font-bold uppercase bg-green-600 py-4 px-5 
                    text-white inline-block hover:bg-white hover:text-green-600 hover:shadow-2xl"
                >
                  {aboutContent.content.btn.label}
                </Link>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
