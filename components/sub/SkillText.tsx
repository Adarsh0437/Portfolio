"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const SkillText = () => {
    return (
        <div className="w-full h-auto pt-20 flex flex-col items-center justify-center">
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
                    >
                        Core
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Skills{" "}
                        </span>
                    </motion.div>
                )}
            </InView>

            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromLeft(0.5)}
                        className="text-[18px] text-gray-300 mb-10 mt-[10px] text-center max-w-2xl px-4"
                    >
                        A practical toolkit for analytics, model building,
                        visualization, and data-driven storytelling.
                    </motion.div>
                )}
            </InView>
        </div>
    );
};

export default SkillText;
