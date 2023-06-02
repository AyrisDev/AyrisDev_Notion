export default function filterPublishedPosts({
  posts,
  onlyNewsletter,
  onlyPost,
  onlyHidden,
  onlyProjects,
  onlyPartners
}) {
  if (!posts || !posts.length) return []
  return posts
    .filter((post) =>
      onlyNewsletter ? post?.type?.[0] === 'Newsletter' : post
    )
    .filter((post) => (onlyPost ? post?.type?.[0] === 'Post' : post))
    .filter((post) => (onlyProjects ? post?.type?.[0] === 'Projects' : post))
    .filter((post) => (onlyPartners ? post?.type?.[0] === 'Partners' : post))
    .filter((post) =>
      onlyHidden ? post?.type?.[0] === 'Hidden' : post?.type?.[0] !== 'Hidden'
    )
    .filter((post) => {
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        post.date <= new Date()
      )
    })
}
