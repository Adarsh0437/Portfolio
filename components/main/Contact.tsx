"use client";

import React from "react";
import { profile } from "@/constants";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Contact = () => {
    return (
        <section id="contact" className="px-4 sm:px-5 md:px-12 py-20">
            <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.35)}
                            className="rounded-[28px] border border-[#7042f88b] bg-[linear-gradient(135deg,rgba(112,66,248,0.16),rgba(12,5,36,0.95))] p-6 sm:p-8"
                        >
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                                Contact
                            </p>
                            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
                                Open to data science opportunities
                            </h2>
                            <p className="mt-5 max-w-2xl text-gray-300 leading-7">
                                I&apos;m looking for opportunities where I can grow as a
                                data science professional, contribute to real projects,
                                and keep building stronger analytics and machine learning
                                skills.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="rounded-lg button-primary px-6 py-3 text-white"
                                >
                                    Email Me
                                </a>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-[#7042f88b] px-6 py-3 text-white"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-[#7042f88b] px-6 py-3 text-white"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={profile.resume}
                                    download
                                    className="rounded-lg border border-cyan-400/30 px-6 py-3 text-white"
                                >
                                    Resume
                                </a>
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                                        Email
                                    </p>
                                    <p className="mt-3 text-white break-all">{profile.email}</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                                        Location
                                    </p>
                                    <p className="mt-3 text-white">{profile.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </InView>

                <div>
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.35)}
                                className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/5 p-6 sm:p-8"
                            >
                                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                                    Focus Areas
                                </p>
                                <p className="mt-4 text-gray-200 leading-7">
                                    Machine learning, exploratory data analysis, data
                                    cleaning, visualization, and practical prediction
                                    problems using Python, SQL, and Power BI.
                                </p>
                            </motion.div>
                        )}
                    </InView>
                </div>
            </div>
        </section>
    );
};

export default Contact;
