"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

export default function Hero() {
	const text = "Full-Stack Developer & Linux Enthusiast";

	return (
		<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-pink-700 to-orange-600 dark:from-purple-900 dark:via-pink-800 dark:to-orange-700 font-sans">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center"
			>
				<motion.h1
					className={cn(
						"text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 dark:from-yellow-300 dark:via-pink-400 dark:to-purple-400",
						GeistMono.className,
					)}
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
				>
					Benjy Ross
				</motion.h1>
				<motion.p
					className="text-2xl mb-8 text-gray-200 dark:text-gray-300"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					<TypewriterEffect text={text} />
				</motion.p>
				<motion.button
					className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-200"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link href="mailto:benjy@benjyross.xyz">Get in touch</Link>
				</motion.button>
			</motion.div>
		</section>
	);
}

function TypewriterEffect({ text }: { text: string }) {
	const uniqueChars = text.split("").map((char, index) => ({
		char,
		id: `${char}-${Math.random().toString(36).substr(2, 9)}-${index}`,
	}));

	return (
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1,
				delay: 0.5,
				staggerChildren: 0.05,
			}}
		>
			{uniqueChars.map(({ char, id }, index) => (
				<motion.span
					key={id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.1,
						delay: index * 0.05,
					}}
				>
					{char}
				</motion.span>
			))}
		</motion.span>
	);
}
