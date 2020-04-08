import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Tours from '../components/Tours/Tours'
import StyledHero from '../components/StyledHero'

const tours = ({data}) => (
  <Layout>
    <StyledHero img={data.defaultBG.childImageSharp.fluid} />
    <Tours />
  </Layout>
)

export const query = graphql`
	query {
		defaultBG:file(relativePath:{eq:"defaultBcg.jpeg"}){
			childImageSharp{
				fluid(quality:90, maxWidth: 4160){
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

export default tours
