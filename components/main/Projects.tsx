import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { featuredCards } from "@/constants";

const Projects = () => {
    return (
        <section
            className="flex flex-col items-center justify-center py-20 px-4 sm:px-5 md:px-12"
            id="projects"
        >
            <div className="max-w-6xl w-full">
                <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 text-center">
                    Featured Work
                </h1>
                <p className="text-center text-gray-300 max-w-3xl mx-auto leading-7 mb-12">
                    A mix of project work, practical experience, and learning
                    milestones that reflects my growth in data science and
                    analytics.
                </p>
                <div className="grid h-full w-full gap-8 md:grid-cols-2">
                    {featuredCards.map((card) => (
                        <ProjectCard
                            key={card.title}
                            title={card.title}
                            label={card.label}
                            description={card.description}
                            tags={card.tags}
                            links={card.links}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
