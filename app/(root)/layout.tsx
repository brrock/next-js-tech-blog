import "../globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import { SiteHeader } from "@/components/site-header";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Providers } from "@/components/providers";

export const metadata = {
	title: "Amazing Portfolio",
	description:
		"A full-stack animated Next.js portfolio showcasing projects and tech stack",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative min-h-screen">
			<AnimatedBackground />
			<SiteHeader />
			<div className="relative z-10">{children}</div>
		</div>
	);
}
