"use client";

import { skillGroups } from "@/constants";
import React from "react";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden py-20 px-4 sm:px-5 md:px-12"
        >
            <SkillText />

            <div className="grid w-full max-w-6xl gap-5 md:grid-cols-2">
                {skillGroups.map((group, index) => (
                    <InView triggerOnce={false} key={group.title}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={
                                    index % 2 === 0
                                        ? slideInFromLeft(0.4)
                                        : slideInFromRight(0.4)
                                }
                                className="rounded-[24px] border border-[#7042f88b] bg-[#0c0524bf] p-6 text-white"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold">
                                    {group.title}
                                </span>
                                <div className="flex flex-wrap gap-3 mt-6">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>

            <div className="hidden md:block w-full h-full absolute top-24">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
