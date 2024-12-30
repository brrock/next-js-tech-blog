import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { GeistMono } from "geist/font/mono";
const computedFields = <T extends { slug: string }>(data: T) => ({
	...data,
	slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
	name: "Post",
	pattern: "blog/**/*.mdx",
	schema: s
		.object({
			slug: s.path(),
			title: s.string().max(99),
			description: s.string().max(999).optional(),
			date: s.isodate(),
			published: s.boolean().default(true),
			body: s.mdx(),
		})
		.transform(computedFields),
});

export default defineConfig({
	root: "content",
	output: {
		data: ".velite",
		assets: "public/static",
		base: "/static/",
		name: "[name]-[hash:6].[ext]",
		clean: true,
	},
	collections: { posts },
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			[rehypePrettyCode, { theme: "material-theme-ocean" }],
			[
				rehypeAutolinkHeadings,
				{
					behavior: "wrap",
					properties: {
						className: ["subheading-anchor", GeistMono.className],
						ariaLabel: "Link to section",
					},
				},
			],
		],
		remarkPlugins: [],
	},
});
