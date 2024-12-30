import type { Metadata, Viewport } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body
			className={cn("min-h-screen bg-background font-sans antialiased")}
			suppressHydrationWarning
		>
			<Providers>
				<div className="relative flex min-h-dvh flex-col bg-background">
					<SiteHeader />
					<div className="flex-1">{children}</div>
					<SiteFooter />
				</div>
			</Providers>
		</body>
	);
}
