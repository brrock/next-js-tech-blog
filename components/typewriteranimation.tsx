import { motion } from "framer-motion";

export default function TypewriterEffect({ text }: { text: string }) {
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
