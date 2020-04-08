import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Tour from '../Tours/Tour'
import Title from '../Title'
import styles from '../../css/items.module.css'

const getFeaturedTours = graphql`
	query{
		featuredTours:allContentfulTour(filter:{boolean:{eq:true}}){
			edges{
				node{
					contentful_id
					name
					price
					slug
					country
					days
					images{
						fluid{
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`

const FeaturedTours = () => {
  const res = useStaticQuery(getFeaturedTours)
  const tours = res.featuredTours.edges
  return <section className={styles.tours}>
    <Title title={'featured'} subtitle={'tours'}/>
    <div className={styles.center}>
      {tours.map(({ node }) => (
        <Tour tour={node} key={node.contentful_id}/>
      ))}
    </div>
    <AniLink fade to={'/tours'} className="btn-primary">all tours</AniLink>
  </section>
}

export default FeaturedTours
