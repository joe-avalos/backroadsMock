import React from "react"
import { graphql} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import FeaturedTours from '../components/Home/FeaturedTours'

export default ({data}) => (
    <Layout>
      <SEO title={'Home'} />
      <StyledHero home={'true'} img={data.defaultBG.childImageSharp.fluid}>
        <Banner
          title={'Continue exploring'}
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, voluptatum."
        >
          <AniLink fade to={'/tours'} className="btn-white">Explore tours</AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
)

export const getDefaultImage = graphql`
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
