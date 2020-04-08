import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'

import styles from '../../css/tour.module.css'
//import {getDefaultImage} from '../../pages'

const getDefaultImage = graphql`
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

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  const {defaultBG} = useStaticQuery(getDefaultImage)
  let mainImg = (images && images[0].fluid) || defaultBG.childImageSharp.fluid
  return <article className={styles.tour}>
    <div className={styles.imgContainer}>
      <Img fluid={mainImg} className={styles.img} alt={name}/>
      <AniLink fade className={styles.link} to={`/tours/${slug}`}>details</AniLink>
    </div>
    <div className={styles.footer}>
      <h3>{name}</h3>
      <div className={styles.info}>
        <h4 className={styles.country}>
          <FaMap className={styles.icon}/>
          {country || 'TBD'}
        </h4>
        <div className={styles.details}>
          <h6>{days || 'TBD'} days</h6>
          <h6>from: ${price || 'TBD'}</h6>
        </div>
      </div>
    </div>
  </article>
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Tour
