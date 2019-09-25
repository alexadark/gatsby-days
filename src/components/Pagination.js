/** @jsx jsx */
import { jsx, Box } from "theme-ui"

import { Link } from "gatsby"

const Pagination = ({ pageNumber, hasNextPage, allPosts, itemsPerPage }) => (
  <nav sx={{ variant: `menus.pagination` }}>
    {pageNumber > 1 && (
      <Box sx={{ variant: `menus.prevNextLinks` }}>
        <Link to={pageNumber > 2 ? `blog/${pageNumber - 1}` : `/`}>
          Previous Posts
        </Link>
      </Box>
    )}
    <Box sx={{ variant: `menus.pageNumbers` }}>
      {Array.from({ length: allPosts.length / itemsPerPage }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={i === 0 ? `blog/` : `blog/${i + 1}`}
        >
          {i + 1}
        </Link>
      ))}
    </Box>
    {hasNextPage && (
      <Box sx={{ variant: `menus.prevNextLinks` }}>
        <Link to={`blog/${pageNumber + 1}`}>Next Posts</Link>
      </Box>
    )}
  </nav>
)

export default Pagination
