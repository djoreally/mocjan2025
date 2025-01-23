import axios from "axios"

const WORDPRESS_API_URL = "https://booking.momsoilchange.com/graphql"

const wordpressApi = axios.create({
  baseURL: WORDPRESS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const fetchBlogPosts = async () => {
  const query = `
    query GetBlogPosts {
      posts(first: 10) {
        nodes {
          id
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `

  try {
    const response = await wordpressApi.post("", { query })
    return response.data.data.posts.nodes
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export const fetchSinglePost = async (slug: string) => {
  const query = `
    query GetSinglePost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `

  try {
    const response = await wordpressApi.post("", {
      query,
      variables: { slug },
    })
    return response.data.data.post
  } catch (error) {
    console.error("Error fetching single post:", error)
    return null
  }
}

