import React from 'react';
import { graphql } from 'gatsby';
import ListItem from '../../components/ListItem';
import H1 from '../../styles/H1';
import Heading from '../../styles/Heading';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <div>
        <H1>Blog</H1>
        <Heading>Recent Posts</Heading>
        <ul>
          {posts.map(({ node }) => (
            <ListItem
              key={node.fields.slug}
              data={{
                key: node.fields.slug,
                linkUrl: node.fields.slug,
                linkText: node.frontmatter.title,
                secondaryInfo: node.frontmatter.date,
                auxInfo: node.frontmatter.description || node.excerpt,
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
