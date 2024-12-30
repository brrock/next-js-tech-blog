import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";

interface PostItemProps {
	slug: string;
	title: string;
	description?: string;
	date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
	return (
		<article className="flex flex-col gap-2 border-border border-b py-6 group">
			<div>
				<h2 className="text-2xl font-bold">
					<Link
						href={slug}
						className="text-foreground hover:text-primary transition-colors"
					>
						{title}
					</Link>
				</h2>
			</div>
			{description && (
				<div className="text-muted-foreground">{description}</div>
			)}
			<div className="flex justify-between items-center">
				<dl>
					<dt className="sr-only">Published On</dt>
					<dd className="text-sm sm:text-base font-medium flex items-center gap-1 text-muted-foreground">
						<Calendar className="h-4 w-4" />
						<time dateTime={date}>{formatDate(date)}</time>
					</dd>
				</dl>
				<Link
					href={slug}
					className={cn(
						buttonVariants({ variant: "link" }),
						"py-0 group-hover:text-primary transition-colors",
					)}
				>
					Read more →
				</Link>
			</div>
		</article>
	);
}
