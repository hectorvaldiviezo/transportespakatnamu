"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Award, Compass } from "lucide-react";
import { useRef } from "react";
import type { StatsResource } from "./stats/lib/stats.interface";
import { StatsSection } from "./stats/stats-section";
import Link from "next/link";
import Image from "next/image";

const PROPOSITO =
  "Conectar los sueños de los peruanos, trasladando sus esfuerzos y logros, impulsando el desarrollo y fortalecimiento integral del país.";
const VISION =
  "Ser una empresa líder en el sector transporte y de servicio logístico a nivel nacional.";

interface Props {
  stats: StatsResource[];
}

export default function AboutUs({ stats }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Animation variants
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

  const cardHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              ¿Quiénes Somos?
            </motion.h1>

            <motion.div
              className="h-1 w-40 bg-danger mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />

            <motion.p variants={fadeIn} className="text-xl mb-10">
              En Transportes Pakatnamu, impulsamos a nuestros clientes a seguir
              creciendo y expandiendo su futuro por todo el Perú con
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
              variants={fadeIn}
            >
              <div className="text-3xl font-bold bg-white text-danger px-8 py-4 rounded-lg shadow-lg">
                Seguridad
              </div>
              <div className="text-5xl font-bold bg-danger w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                +
              </div>
              <div className="text-3xl font-bold bg-white text-navy px-8 py-4 rounded-lg shadow-lg">
                Eficiencia
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-20 bg-white" ref={scrollRef}>
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeIn}
              className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto border-b-4 border-danger mb-16"
            >
              <p className="text-xl text-gray-700 font-medium">
                Ofrecemos a nuestros clientes emprendedores un servicio de
                transporte de carga destacado por su{" "}
                <span className="font-bold text-danger">seguridad</span>,
                <span className="font-bold text-navy"> modernidad</span> y
                <span className="font-bold text-danger"> eficiencia</span>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={cardHover.hover}
                className="bg-gradient-to-br from-navy to-blue-800 p-10 rounded-xl shadow-md text-white overflow-hidden relative"
              >
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Truck size={150} />
                </div>
                <h3 className="text-3xl font-bold mb-6 border-b border-blue-200 pb-4">
                  Propósito
                </h3>
                <p className="text-xl relative z-10">{PROPOSITO}</p>
                <div className="mt-8 flex justify-end">
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  >
                    <Compass size={30} className="text-white opacity-70" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={cardHover.hover}
                className="bg-white border-2 border-danger p-10 rounded-xl shadow-md overflow-hidden relative"
              >
                <div className="absolute -right-10 -bottom-10 text-red-100">
                  <Award size={150} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-danger border-b border-red-200 pb-4">
                  Visión
                </h3>
                <p className="text-xl text-gray-700 relative z-10">{VISION}</p>
                <div className="mt-8 flex justify-end">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  >
                    <Shield size={30} className="text-danger opacity-70" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-r from-navy/10 to-danger/10">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <StatsSection stats={stats} />
        </div>
      </section>

      {/* Principios Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
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
              Nuestros Principios
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-20 h-1 bg-danger mx-auto mb-8"
            ></motion.div>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
            >
              En Transportes Pakatnamu, nuestros principios definen quiénes
              somos y cómo operamos cada día.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                imgSrc:
                  "https://milla.grupopakatnamu.com/storage/webImages/1/lo-tenemos-todo-controlado.png",
                title: "Lo tenemos todo controlado",
                description:
                  "Ejercemos un control minucioso monitoreando estrictamente el cumplimiento de nuestros procesos.",
              },
              {
                imgSrc:
                  "https://milla.grupopakatnamu.com/storage/webImages/1/mentalidad-de-dueno.png",
                title: "Mentalidad de dueño",
                description:
                  "Asumimos el negocio como propio haciéndonos cargo, logrando que las cosas sucedan y gestionando las consecuencias de nuestras decisiones.",
              },
              {
                imgSrc:
                  "https://milla.grupopakatnamu.com/storage/webImages/1/me-apasiona-conocer-mi-negocio.png",
                title: "Me apasiona conocer mi negocio",
                description:
                  "Nos apasiona conocer profundamente sobre nuestro negocio para aportar desde nuestro rol en su crecimiento y desarrollo.",
              },
              {
                imgSrc:
                  "https://milla.grupopakatnamu.com/storage/webImages/1/tomamos-la-delantera.png",
                title: "Tomamos la delantera",
                description:
                  "En Pakatnamu nos anticipamos a los hechos manteniéndonos proactivos, dinámicos y enérgicos en el cumplimiento de nuestro propósito.",
              },
              {
                imgSrc:
                  "https://milla.grupopakatnamu.com/storage/webImages/1/fomento-con-el-ejemplo-nuestras-normativas.png",
                title: "Fomento con el ejemplo nuestras normativas",
                description:
                  "Somos respetuosos y cuidadores de nuestras políticas y procedimientos, fomentamos el cumplimiento de las mismas y nunca nos desviamos de los lineamientos.",
              },
              {
                imgSrc:
                  "https://milla.grupopakatnamu.com/storage/webImages/1/los-resultados-son-mi-norte.png",
                title: "Los resultados son mi norte",
                description:
                  "Trabajamos con disciplina y perseverancia desde el inicio para lograr los resultados esperados, sin transgredir los lineamientos de la compañía.",
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={cardHover.hover}
                className="bg-white p-8  shadow-md border border-gray-100 flex flex-col items-center relative min-h-56 overflow-hidden"
              >
                <Image
                  src={principle.imgSrc || "/placeholder.svg"}
                  alt={principle.title}
                  fill
                  className="object-cover z-0"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className={`absolute top-0 left-0 w-full h-full group overflow-hidden 
    ${index % 2 === 0 ? "bg-danger/80" : "bg-navy/80"}`}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center px-6 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white transition-transform duration-500">
                      {principle.title}
                    </h3>
                    <p className="text-white text-sm text-justify max-w-md mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-danger to-red-700 text-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-6">
              ¿Listo para trabajar con nosotros?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl mb-10">
              Ofrecemos soluciones logísticas adaptadas a las necesidades
              específicas de cada cliente.
            </motion.p>
            <Link href="/cotizar">
              <motion.button
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 bg-white text-red-700 rounded-full font-bold text-lg shadow-lg"
              >
                Cotiza Ahora
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
