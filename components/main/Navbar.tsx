import { profile, socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="left-0 right-0 mx-auto w-[calc(100%-16px)] sm:w-[calc(100%-24px)] md:w-full h-[65px] fixed top-2 md:top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10 max-w-[1855px] items-center rounded-full">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto">
                <a
                    href="#home"
                    className="h-auto min-w-0 flex flex-row items-center"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7042f88b] bg-white/5 text-white font-bold">
                        AH
                    </div>

                    <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-sm sm:text-base truncate">
                        {profile.name}
                    </span>
                </a>

                <div className="hidden w-3/6 lg:w-1/3 h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-12">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about" className="cursor-pointer">
                            About
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Skills
                        </a>
                        <a href="#experience" className="cursor-pointer">
                            Experience
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Work
                        </a>
                        <a href="#contact" className="cursor-pointer">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-3 sm:gap-5 text-white shrink-0">
                    {socials.map((social) => (
                        <a
                            href={social.link}
                            key={social.name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                                className="cursor-pointer hover:animate-spin"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
