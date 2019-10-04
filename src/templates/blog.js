/** @jsx jsx */
import { jsx, Styled, Container, Box, Flex } from "theme-ui"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Pagination from "../components/Pagination"
import BgImage from "../components/BgImage"

const Blog = ({ data, pageContext }) => {
  const posts = data.wpgraphql.posts.nodes
  const { pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  return (
    <Layout>
      <Container sx={{ maxWidth: `l` }}>
        {data &&
          data.wpgraphql &&
          posts.map(post => (
            <article key={post.id}>
              <Link to={`/posts/${post.uri}`}>
                <Box>
                  <BgImage img={post.featuredImage} height="400px" />
                </Box>
              </Link>
              <Box sx={{ variant: `card.default`, mb: 8 }}>
                <Styled.h2>
                  <Link
                    to={`/posts/${post.uri}`}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                    sx={{ color: `text`, "&:hover": { color: `primary` } }}
                  />
                </Styled.h2>
                <Styled.root
                  className="content"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Flex
                  sx={{
                    justifyContent: [`center`, `flex-end`],
                    mt: 7,
                    mr: [0, 10],
                  }}
                >
                  <Link
                    to={`/posts/${post.uri}`}
                    sx={{ variant: `buttons.secondary` }}
                  >
                    Read More
                  </Link>
                </Flex>
              </Box>
            </article>
          ))}
        <Pagination
          pageNumber={pageNumber}
          hasNextPage={hasNextPage}
          allPosts={allPosts}
          itemsPerPage={itemsPerPage}
        />
      </Container>
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
