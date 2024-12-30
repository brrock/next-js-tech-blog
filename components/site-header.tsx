import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 max-w-screen-2xl items-center justify-between">
				<MainNav />
				<div className="flex items-center gap-4">
					<nav className="flex items-center gap-2">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({ variant: "ghost", size: "icon" }),
								"hidden sm:inline-flex",
							)}
						>
							<Icons.gitHub className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</Link>
						<ModeToggle />
					</nav>
					<MobileNav />
				</div>
			</div>
		</header>
	);
}
