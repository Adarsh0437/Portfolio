"use client";

import React from "react";
import { experienceTimeline } from "@/constants";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const Experience = () => {
    return (
        <section id="experience" className="px-5 md:px-12 py-20">
            <div className="max-w-6xl mx-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-center"
                        >
                            <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Experience
                            </h2>
                            <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-7">
                                Internship and research-linked work that shaped my practical
                                understanding of data collection, analytics, and machine learning.
                            </p>
                        </motion.div>
                    )}
                </InView>

                <div className="mt-12 grid gap-6">
                    {experienceTimeline.map((item, index) => (
                        <InView triggerOnce={false} key={`${item.role}-${item.company}`}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={
                                        index % 2 === 0
                                            ? slideInFromLeft(0.35)
                                            : slideInFromRight(0.35)
                                    }
                                    className="rounded-[24px] border border-[#7042f88b] bg-[#0c0524bf] p-6 md:p-8"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                                                {item.company}
                                            </p>
                                            <h3 className="mt-3 text-2xl font-semibold text-white">
                                                {item.role}
                                            </h3>
                                            <p className="mt-2 text-gray-400">{item.location}</p>
                                        </div>
                                        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                                            {item.period}
                                        </div>
                                    </div>

                                    <ul className="mt-6 space-y-3 list-disc pl-5 text-gray-300 leading-7">
                                        {item.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </InView>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
