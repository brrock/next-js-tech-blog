import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
	searchParams: Promise<{
		page?: string;
	}>;
}

export default async function BlogPage(props: BlogPageProps) {
	const searchParams = await props.searchParams;
	const currentPage = Number(searchParams?.page) || 1;
	const sortedPosts = sortPosts(posts.filter((post) => post.published));
	const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

	const displayPosts = sortedPosts.slice(
		POSTS_PER_PAGE * (currentPage - 1),
		POSTS_PER_PAGE * currentPage,
	);

	return (
		<div className="container max-w-4xl py-6 lg:py-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-y-4">
					<h1 className="inline-block font-black text-4xl lg:text-5xl text-foreground">
						Blog
					</h1>
					<p className="text-xl text-muted-foreground">
						My ramblings on all things web dev.
					</p>
				</div>
			</div>
			<hr className="my-8 border-border" />
			{displayPosts?.length > 0 ? (
				<div className="flex flex-col divide-border">
					{displayPosts.map((post) => {
						const { slug, date, title, description } = post;
						return (
							<PostItem
								key={slug}
								slug={slug}
								date={date}
								title={title}
								description={description}
							/>
						);
					})}
				</div>
			) : (
				<p className="text-muted-foreground">Nothing to see here yet</p>
			)}
			<QueryPagination totalPages={totalPages} className="justify-end mt-8" />
		</div>
	);
}
