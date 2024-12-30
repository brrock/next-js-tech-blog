import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Hero />
			<Projects />
			<TechStack />
		</div>
	);
}
