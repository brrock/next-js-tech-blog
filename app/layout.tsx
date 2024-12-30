import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
	title: "Benjy Ross",
	description: "Personal portfolio showcasing projects and skills",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
		>
			<body className="min-h-screen bg-background font-sans antialiased">
				<Providers>
					<div className="relative flex min-h-screen flex-col">
						<div className="flex-1">{children}</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
