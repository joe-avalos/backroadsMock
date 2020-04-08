import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Contact from '../components/Contact/Contact'
import StyledHero from '../components/StyledHero'

const contact = ({data}) => (
  <Layout>
    <StyledHero img={data.connectBG.childImageSharp.fluid} />
    <Contact />
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

export default contact
