import * as LucideReact from "lucide-react";
import React from "react";
import { AnimatedElement } from "../animated-element";
import { StatsResource } from "./lib/stats.interface";
import { AnimatedCounter } from "../animated-counter";

// Definir el tipo de los nombres de los íconos

interface StatsSectionProps {
  stats: StatsResource[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="pt-8 bg-linear-to-r from-secondary/10 to-danger/10">
      <div className="max-w-(--breakpoint-xl) mx-auto">
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
