import Link from "next/link"
import Image from "next/image"

interface RelatedPost {
  title: string
  slug: string
  excerpt: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
}

export default function RelatedArticles({ currentSlug, posts }: { currentSlug: string, posts: RelatedPost[] }) {
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 3)

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.slug}
            className="group hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"
          >
            {post.featuredImage && (
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}