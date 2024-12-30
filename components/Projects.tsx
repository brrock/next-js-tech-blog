"use client";

import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type {
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
	Key,
} from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
const projects = [
	{
		title: "RoNotBroYT",
		description:
			"A fully functional website for the YouTube channel RoNotBroYT. It features a custom forum, a blog, and a games section. ",
		tech: [
			"Next.js",
			"Node.js",
			"TypeScript",
			"Neon Postgres",
			"shadcn/ui",
			"clerk auth",
		],
		image: (
			<Image
				className="rounded-lg mx-auto"
				src="https://c0fj84hjk82xuabd.public.blob.vercel-storage.com/screencapture-ronotbroyt-xyz-2024-12-30-09_55_36-ApiQ7mRQshXfgNf7WoRDVLTdTaTSeK.png"
				alt="RoNotBroYT"
				width={300}
				height={200}
			/>
		),
		link: "https://ronotbroyt.xyz",
		github: "https://github.com/benjyross/RoNotBroYT",
	},
	{
		title: "GameX",
		description:
			"A A open source games app",
		tech: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "clerk auth"],
		image: (
			<div className="w-full h-full bg-gradient-to-r from-blue-500 to-red-500 rounded-lg" />
		),
		wip: true,
  github: "https://github.com/brrock/gamex"
		link: "https://gamex.benjyross.xyz",
	},
	{
		title: "Tech Blog and Portfolio",
		description:
			"A tech blog and portfolio website. It features a blog, a portfolio, and a contact form.",
		tech: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "clerk auth"],
		image: (
			<Skeleton className="w-full h-full bg-gradient-to-r from-blue-500 to-red-500 rounded-lg" />
		),
		link: "/",
	},
];

export default function Projects() {
	return (
		<section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
			<motion.h2
				className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Projects
			</motion.h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
				{projects.map((project) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<Card className="bg-gray-800 text-white h-full flex flex-col overflow-hidden">
							{project.image}
							<CardHeader>
								<CardTitle className="text-xl font-semibold flex items-center justify-between">
									<Link
										href={project.link}
										target="_blank"
										className="flex items-center"
									>
										{project.title}{" "}
										{project.wip && (
											<Badge
												variant="secondary"
												className="bg-yellow-500 text-black ml-2"
											>
												WIP
											</Badge>
										)}
									</Link>
									{project.github && (
										<Link
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="ml-2"
											aria-label={`View GitHub repository for ${project.title}`}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-github"
												viewBox="0 0 16 16"
												aria-hidden="true"
											>
												<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.57.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
											</svg>
											<span className="sr-only">GitHub Repository</span>
										</Link>
									)}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-300">
									{project.description}
								</CardDescription>
							</CardContent>
							<CardFooter className="mt-auto">
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech: string) => (
										<Badge
											key={tech}
											variant="secondary"
											className="bg-purple-700 text-white"
										>
											{tech}
										</Badge>
									))}
								</div>
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
}
