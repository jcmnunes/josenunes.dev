import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Footer from '../components/Footer';

import 'katex/dist/katex.min.css';

const StyledBlogPost = styled.div`
  h1 {
    color: ${props => props.theme.neutral100};
    margin-bottom: 12px;
  }

  h2 {
    color: ${props => props.theme.neutral100};
    margin-top: 52px;
    margin-bottom: 24px;
  }

  h3 {
    color: ${props => props.theme.neutral100};
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: ${props => props.theme.neutral400};
  }

  ul {
    color: ${props => props.theme.neutral400};
    font-size: 16px;
  }

  .katex {
    color: ${props => props.theme.neutral400};
  }
`;

const Date = styled.div`
  font-size: 16px;
  color: ${props => props.theme.primary500};
  margin-bottom: 32px;
`;

const PostLinks = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  font-size: 16px;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;

    return (
      <StyledBlogPost>
        <h1>{post.frontmatter.title}</h1>
        <Date>{post.frontmatter.date}</Date>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <PostLinks>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PostLinks>
        <Footer />
      </StyledBlogPost>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
