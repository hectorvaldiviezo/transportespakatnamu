"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Award, Compass } from "lucide-react";
import { useRef } from "react";
import { StatsResource } from "./stats/lib/stats.interface";
import { StatsSection } from "./stats/stats-section";
import Link from "next/link";
import Image from "next/image";

interface Props {
  stats: StatsResource[];
}

export default function AboutUs({ stats }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="flex min-h-screen max-w-screen-xl mx-auto flex-col items-center">
      {/* Quiénes Somos Section */}
      <div ref={scrollRef}>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-5xl font-bold mb-4 text-navy relative flex flex-col items-center"
              >
                ¿Quiénes Somos?
                <motion.div
                  className="parallax relative mb-4 h-1 w-40 overflow-hidden rounded-full bg-white/20"
                  data-speed="0.2"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 160, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-navy to-danger"
                    animate={{ x: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-3xl mx-auto mt-8"
              >
                Somos una empresa de transporte comprometida con la excelencia y
                el crecimiento sostenible. Nuestra visión se basa en dos pilares
                fundamentales:
              </motion.p>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center my-16 relative"
              >
                <div className="relative">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-danger bg-white px-10 py-6 rounded-lg shadow-lg z-10 relative"
                  >
                    Oportunidad
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-6xl font-bold text-white bg-danger w-20 h-20 rounded-full flex items-center justify-center mx-auto my-6 shadow-lg"
                  >
                    +
                  </motion.div>

                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-navy bg-white px-10 py-6 rounded-lg shadow-lg z-10 relative"
                  >
                    Competencia
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-4xl mx-auto border-l-4 border-danger"
              >
                <p className="text-xl text-gray-700 italic">
                  "Contamos con un equipo altamente capacitado y proveedores de
                  primer nivel, lo que nos permite ofrecer soluciones logísticas
                  adaptadas a las necesidades específicas de cada cliente."
                </p>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-gradient-to-br from-navy via-navy to-blue-800 p-10 rounded-xl shadow-md text-white overflow-hidden relative"
              >
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Truck size={150} />
                </div>
                <h3 className="text-3xl font-bold mb-6 border-b border-blue-200 pb-4">
                  Misión
                </h3>
                <p className="text-xl relative z-10">
                  Ser un trasportista de carga pesada, reconocido en Perú y más
                  allá de nuestras fronteras.
                </p>
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
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white border-2 border-danger p-10 rounded-xl shadow-md overflow-hidden relative"
              >
                <div className="absolute -right-10 -bottom-10 text-red-100">
                  <Award size={150} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-danger border-b border-red-200 pb-4">
                  Visión
                </h3>
                <p className="text-xl text-gray-700 relative z-10">
                  Brindar servicio de Transporte de carga, rentablemente, con
                  procesos flexibles, oportunos y en condiciones económicas que
                  satisfagan a nuestros clientes.
                </p>
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

            {/* Estadísticas */}
            <StatsSection stats={stats} />
          </div>
        </section>
      </div>

      {/* Valores Section */}

      <section className="pt-10 pb-20">
        <div className="container mx-auto px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-4 text-navy"
            >
              Nuestros Valores
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-danger mx-auto mb-8"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              En Transportes Pakatnamu, nuestros valores definen quiénes somos y
              cómo operamos cada día.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="size-24 rounded-full flex items-center justify-center mb-6 mx-auto relative">
                  <Image
                    src={value.imgSrc}
                    alt={value.title}
                    fill
                    className="aspect-square object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-danger text-white w-full">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6"
            >
              ¿Listo para trabajar con nosotros?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl mb-10 max-w-3xl mx-auto"
            >
              Ofrecemos soluciones logísticas adaptadas a las necesidades
              específicas de cada cliente.
            </motion.p>
            <Link href="/cotizar">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2 bg-white text-red-700 rounded-full font-bold text-lg shadow-lg"
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
