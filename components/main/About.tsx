"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    slideInFromBottom,
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";
import { aboutStats, profile } from "@/constants";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col relative items-center justify-center min-h-screen w-full h-full px-4 sm:px-5 md:px-12 py-20"
        >
            <div className="w-full max-w-6xl">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-3xl sm:text-[40px] pb-6 font-medium text-center text-gray-200 z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>

                <div className="grid gap-8 md:grid-cols-[1.1fr_1.4fr] items-stretch">
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromLeft(0.5)}
                                className="rounded-[28px] border border-[#7042f88b] bg-[#0c0524cc] p-6 sm:p-8 flex flex-col justify-between"
                            >
                                <div>
                                    {profile.image ? (
                                        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-cyan-400/30">
                                            <Image
                                                src={profile.image}
                                                alt={profile.name}
                                                fill
                                                sizes="112px"
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-[radial-gradient(circle,_rgba(83,162,255,0.35),_rgba(112,66,248,0.15))] text-3xl font-bold text-white">
                                            AH
                                        </div>
                                    )}
                                    <h2 className="mt-6 text-3xl font-semibold text-white">
                                        {profile.name}
                                    </h2>
                                    <p className="mt-2 text-cyan-200">{profile.title}</p>
                                    <p className="mt-2 text-gray-400">{profile.location}</p>
                                </div>

                                <div className="mt-8 space-y-4 text-sm md:text-base text-gray-300 leading-7">
                                    <p>
                                        I&apos;m currently pursuing MCA while
                                        building my path in data science,
                                        machine learning, and analytics
                                        workflows that connect exploration with
                                        practical decision-making.
                                    </p>
                                    <p>
                                        My background combines internship-based
                                        project work with real-world data
                                        collection experience, which helps me
                                        stay grounded in both technical details
                                        and data quality.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.5)}
                                className="rounded-[28px] border border-[#7042f88b] bg-[#0c0524b8] p-6 sm:p-8"
                            >
                                <div className="Welcome-box px-[15px] py-[8px] border border-[#7042f88b] opacity-[0.95]">
                                    <h1 className="Welcome-text text-[18px] font-bold">
                                        Career Snapshot
                                    </h1>
                                </div>

                                <p className="mt-6 text-[16px] text-justify text-gray-200 leading-8">
                                    {profile.summary}
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    {aboutStats.map((stat) => (
                                        <InView triggerOnce={false} key={stat.label}>
                                            {({ inView, ref }) => (
                                                <motion.div
                                                    ref={ref}
                                                    initial="hidden"
                                                    animate={inView ? "visible" : "hidden"}
                                                    variants={slideInFromBottom}
                                                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                                >
                                                    <p className="text-3xl font-bold text-white">
                                                        {stat.value}
                                                    </p>
                                                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">
                                                        {stat.label}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </InView>
                                    ))}
                                </div>

                                <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5 text-gray-200">
                                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                                        Education
                                    </p>
                                    <p className="mt-3 text-xl font-semibold text-white">
                                        Master of Computer Applications
                                    </p>
                                    <p className="mt-2 text-gray-300">
                                        Currently pursuing MCA
                                    </p>
                                    <p className="mt-6 text-xl font-semibold text-white">
                                        Bachelor in Computer Science
                                    </p>
                                    <p className="mt-2 text-gray-300">
                                        Emmanuel College, Thiruvananthapuram
                                    </p>
                                    <p className="mt-1 text-gray-400">
                                        June 2020 to March 2023
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>

            <div className="mt-8 z-[20] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    {profile.quote}
                </div>
            </div>
        </section>
    );
};

export default About;
