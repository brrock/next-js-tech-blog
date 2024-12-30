import "../globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import { SiteHeader } from "@/components/site-header";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";

export const metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
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
