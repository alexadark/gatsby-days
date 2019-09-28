/** @jsx jsx */
import { jsx, Styled, Container, Box } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BgImage from "../components/BgImage"

const SinglePOST = ({ data }) => {
  const { content, featuredImage, title } = data.wpgraphql.post

  return (
    <Layout>
      <Container sx={{ maxWidth: `l` }}>
        <BgImage img={featuredImage} height="400px" />
        <Box sx={{ variant: `card.default` }}>
          <Styled.h1 dangerouslySetInnerHTML={{ __html: title }} />
          <Styled.root
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Box>
      </Container>
    </Layout>
  )
}
export default SinglePOST

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        featuredImage {
          ...GatsbyImageQuery
        }
      }
    }
  }
`
