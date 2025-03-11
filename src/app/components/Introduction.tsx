"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image
                    src="/perfil-cv.jpg"
                    priority
                    width={600}
                    height={600}
                    alt="Profile pic"
                />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Hola! Soy Agustin, <br></br>
                        <TypeAnimation
                            sequence={[
                                "motivado para nuevos desafíos",
                                1000,
                                "buscando oportunidades para crecer",
                                1000,
                                "comprometido con la excelencia",
                                1000,
                                "preparado para aportar valor",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-blue-300"
                        />


                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Apasionado por la tecnología y el desarrollo web. Con motivación y compromiso, busco una oportunidad para demostrar mi capacidad y seguir aprendiendo en un entorno desafiante.
                    </p>
                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/portfolio" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer
                        text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link href="/CV-AGUSTIN_ALLENDE.docx"
                        download="CV-AGUSTIN_ALLENDE.docx" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-blue-300
                        text-md w-fit rounded-xl hover:shadow-xl hover:shadow-blue-300/50">
                            Descargar CV
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
