import React from "react";

interface ProjectLink {
    label: string;
    href: string;
}

interface Props {
    title: string;
    label: string;
    description: string;
    tags: string[];
    links: ProjectLink[];
}

const ProjectCard = ({ title, label, description, tags, links }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-[24px] shadow-lg border border-[#2A0E61] bg-[#0c0524c9] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                {label}
            </p>
            <h1 className="mt-4 text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-4 text-gray-300 leading-7">{description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {links.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-[#7042f88b] px-4 py-2 text-sm text-white transition hover:bg-white/5"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default ProjectCard;
