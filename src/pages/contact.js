import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

const Contact = ({data}) => (
  <Layout>
    <StyledHero img={data.connectBG.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
	query {
		connectBG:file(relativePath:{eq:"connectBcg.jpeg"}){
			childImageSharp{
				fluid(quality:90, maxWidth: 4160){
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`

export default Contact
