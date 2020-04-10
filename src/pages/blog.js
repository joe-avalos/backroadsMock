import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import BlogList from '../components/Blog/BlogList'

const Blog = ({data}) => (
  <Layout>
    <StyledHero img={data.blogBG.childImageSharp.fluid} />
    <BlogList />
  </Layout>
)

export const query = graphql`
	query {
		blogBG:file(relativePath:{eq:"blogBcg.jpeg"}){
			childImageSharp{
				fluid(quality:90, maxWidth: 4160){
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

export default Blog
