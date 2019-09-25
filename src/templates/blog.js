/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Pagination from "../components/Pagination"
import GatsbyImg from "../components/GatsbyImage"

const Blog = ({ data, pageContext }) => {
  const posts = data.wpgraphql.posts.nodes
  const { pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  return (
    <Layout>
      {data &&
        data.wpgraphql &&
        posts.map(post => (
          <article key={post.id}>
            <GatsbyImg img={post.featuredImage} />
            <Styled.h2>
              <Link
                to={`/posts/${post.uri}`}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </Styled.h2>
            <Styled.root
              className="content"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </article>
        ))}
      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(first: 3, where: { in: $ids }) {
        nodes {
          id
          uri
          title
          excerpt
          date
          featuredImage {
            ...GatsbyImageQuery
          }
        }
      }
    }
  }
`
