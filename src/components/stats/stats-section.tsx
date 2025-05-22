import * as LucideReact from "lucide-react";
import React from "react";
import { AnimatedElement } from "../animated-element";
import { StatsResource } from "./lib/stats.interface";
import { AnimatedCounter } from "../animated-counter";
import { motion } from "framer-motion";

// Definir el tipo de los nombres de los íconos

interface StatsSectionProps {
  stats: StatsResource[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section className="pt-8">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold mb-4 text-navy"
          >
            Nuestras Cifras
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-danger mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
          >
            Resultados que respaldan nuestro compromiso y desempeño constante.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = LucideReact[stat.icon] as React.ComponentType<any>;

            return (
              <AnimatedElement
                key={index}
                animation="fade-up"
                delay={100 * index}
                className="bg-background dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {Icon && <Icon className="h-12 w-12 text-danger" />}
                </div>
                <AnimatedCounter end={stat.number} suffix={stat.symbol} />
                <h3 className="text-xl font-semibold mt-2 mb-1">
                  {stat.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
