import { h } from "preact"
import Styles from "./styles.module.scss"

function BlogPreview({ blog }) {
	const { frontmatter } = blog
	return (
		<div style={{ display: "flex" }}>
			<div>
				<a href={blog.url} className={Styles.title}>
					{frontmatter.title}
				</a>
				<div className={Styles.tagsContainer}>
					{frontmatter.tags.map((t) => (
						<span className={Styles.tags} data-tag={t}>
							{t}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default BlogPreview
