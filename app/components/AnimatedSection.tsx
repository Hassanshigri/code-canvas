'use client'

import { useRef, ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import React from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {/* Apply fadeInUp to each child */}
      {React.Children.map(children, (child) => {
        return (
          <motion.div variants={fadeInUp}>
            {child}
          </motion.div>
        );
      })}
    </motion.section>
  );
}
