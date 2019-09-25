/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import GatsbyImg from "../components/GatsbyImage"

const SinglePOST = ({ data }) => {
  const { content, featuredImage, title } = data.wpgraphql.post

  return (
    <Layout>
      <GatsbyImg img={featuredImage} />
      <Styled.h1 dangerouslySetInnerHTML={{ __html: title }} />
      <Styled.root
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
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
