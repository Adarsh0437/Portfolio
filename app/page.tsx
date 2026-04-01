import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
    return (
        <main className="relative z-10 h-full w-full max-w-full overflow-x-hidden">
			<div className="flex flex-col gap-20">
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
			</div>
        </main>
    );
}  
