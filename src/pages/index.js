import React from "react"
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default ({data}) => (
    <Layout>
      <StyledHero home={'true'} img={data.defaultBG.childImageSharp.fluid}>
        <Banner
          title={'Continue exploring'}
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, voluptatum."
        >
          <Link to={'/tours'} className="btn-white">Explore tours</Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
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
