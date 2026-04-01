"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import { InView } from "react-intersection-observer";
import { heroBadges, highlights, profile } from "@/constants";

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col items-center justify-center gap-10 md:gap-12 md:px-20 px-4 sm:px-5 mt-28 md:mt-40 w-full max-w-full overflow-x-hidden z-20"
                >
                    <div className="h-full w-full md:w-3/5 flex flex-col gap-5 justify-center text-center md:text-start">
                        <div className="flex w-full max-w-full flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
                            {heroBadges.map((badge) => (
                                <InView triggerOnce={false} key={badge}>
                                    {({ inView, ref }) => (
                                        <motion.div
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? "visible" : "hidden"}
                                            variants={slideInFromTop}
                                            className="Welcome-box max-w-full py-[7px] px-[9px] border border-[#7042f88b] opacity-[0.95]"
                                        >
                                            <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                            <h1 className="Welcome-text text-[11px] sm:text-[13px]">
                                                {badge}
                                            </h1>
                                        </motion.div>
                                    )}
                                </InView>
                            ))}
                        </div>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-4 mt-2 md:text-5xl text-3xl sm:text-4xl font-bold text-white max-w-[760px] z-20"
                                >
                                    <span>
                                        {profile.name}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                            {" "}
                                            builds with data
                                        </span>
                                        {" "}to uncover patterns and guide better decisions.
                                    </span>
                                </motion.div>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.7)}
                                    className="text-sm md:text-lg text-gray-300 max-w-[700px] z-30 leading-7"
                                >
                                    {profile.summary}
                                </motion.p>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.ul
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.9)}
                                    className="text-sm md:text-base text-gray-400 max-w-[700px] z-30 space-y-2 list-disc pl-5 text-start"
                                >
                                    {highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </motion.ul>
                            )}
                        </InView>

                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(1)}
                                    className="flex flex-wrap justify-center md:justify-start gap-4 z-40"
                                >
                                    <a
                                        href="#projects"
                                        className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
                                    >
                                        View Work
                                    </a>
                                    <a
                                        href={profile.resume}
                                        download
                                        className="py-2 px-6 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg"
                                    >
                                        Download Resume
                                    </a>
                                </motion.div>
                            )}
                        </InView>
                    </div>

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-2/5 h-full flex justify-center items-center z-40"
                            >
                                <div className="relative flex h-[min(78vw,320px)] w-[min(78vw,320px)] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px] items-center justify-center rounded-full border border-[#7042f88b] bg-[radial-gradient(circle_at_top,_rgba(123,92,255,0.35),_rgba(3,0,20,0.6)_55%)] shadow-[0_0_80px_rgba(112,66,248,0.25)]">
                                    <div className="absolute inset-6 rounded-full border border-cyan-400/20" />
                                    <div className="absolute inset-12 rounded-full border border-purple-400/20" />
                                    <div className="text-center px-8">
                                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
                                            {profile.title}
                                        </p>
                                        {profile.image ? (
                                            <div className="relative mx-auto mt-4 h-28 w-28 overflow-hidden rounded-full border border-white/20 shadow-[0_0_35px_rgba(112,66,248,0.35)] md:h-36 md:w-36">
                                                <Image
                                                    src={profile.image}
                                                    alt={profile.name}
                                                    fill
                                                    priority
                                                    sizes="144px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <h2 className="mt-4 text-5xl md:text-7xl font-bold text-white">
                                                AH
                                            </h2>
                                        )}
                                        <p className="mt-4 text-sm md:text-base text-gray-300 leading-6">
                                            {profile.tagline}
                                        </p>
                                        <p className="mt-6 text-xs md:text-sm text-purple-200/80">
                                            {profile.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;
