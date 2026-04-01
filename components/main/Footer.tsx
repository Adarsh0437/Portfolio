import React from "react";
import { profile } from "@/constants";
import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed,
} from "react-icons/rx";

const Footer = () => {
    return (
        <footer className="relative z-10 w-full bg-transparent text-gray-200 shadow-lg p-[20px]">
            <div className="max-w-6xl mx-auto rounded-[24px] border border-[#7042f84d] bg-[#0c0524a6] px-6 py-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                            Let&apos;s Connect
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-white">
                            {profile.name}
                        </h2>
                        <p className="mt-2 text-gray-300 max-w-xl">
                            Open to data science opportunities where I can keep
                            learning, contribute to meaningful projects, and
                            turn data into useful decisions.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="rounded-lg border border-[#7042f88b] px-4 py-2 text-sm text-white"
                            >
                                {profile.email}
                            </a>
                            <span className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300">
                                {profile.location}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm md:text-base">
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex items-center gap-3 hover:text-white"
                        >
                            <RxEnvelopeClosed />
                            <span>{profile.email}</span>
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-white"
                        >
                            <RxLinkedinLogo />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-white"
                        >
                            <RxGithubLogo />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
                    © 2026 ADARSH H. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
