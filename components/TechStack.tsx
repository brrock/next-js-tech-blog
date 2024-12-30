"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, FileCode } from "lucide-react";

type Technology = {
	name: string;
	icon: React.ReactNode;
};

const technologies: Technology[] = [
	{ name: "JavaScript", icon: <Code size={24} /> },
	{ name: "TypeScript", icon: <FileCode size={24} /> },
	{ name: "React", icon: <Code size={24} /> },
	{ name: "Next.js", icon: <Code size={24} /> },
	{ name: "Node.js", icon: <Code size={24} /> },
	{ name: "PostgreSQL", icon: <Code size={24} /> },
	{ name: "Tailwind CSS", icon: <Code size={24} /> },
	{ name: "Framer Motion", icon: <Code size={24} /> },
	{ name: "Git", icon: <Code size={24} /> },
	{ name: "GitHub", icon: <Code size={24} /> },
	{ name: "Docker", icon: <Code size={24} /> },
	{ name: "Vercel", icon: <Code size={24} /> },
	{ name: "Arch Linux", icon: <Code size={24} /> },
	{ name: "Neon Postgres", icon: <Code size={24} /> },
	{ name: "shadcn/ui", icon: <Code size={24} /> },
	{ name: "clerk auth", icon: <Code size={24} /> },
];

export default function TechStack() {
	return (
		<section className="py-20 bg-gradient-to-br from-purple-800 via-pink-700 to-orange-600 dark:from-purple-900 dark:via-pink-800 dark:to-orange-700 font-sans">
			<motion.h2
				className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 dark:from-yellow-300 dark:via-pink-400 dark:to-purple-400"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Tech Stack
			</motion.h2>
			<div className="flex flex-wrap justify-center gap-6 px-4 max-w-7xl mx-auto">
				{technologies.map((tech) => (
					<motion.div
						key={tech.name}
						className="bg-gray-800 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.05 }}
						whileHover={{
							scale: 1.1,
							boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
						}}
					>
						<div className="mb-2 text-white">{tech.icon}</div>
						<span className="text-xs text-center text-white dark:text-gray-200">
							{tech.name}
						</span>
					</motion.div>
				))}
			</div>
		</section>
	);
}
