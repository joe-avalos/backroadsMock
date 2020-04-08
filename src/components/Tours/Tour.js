import React from 'react'
import Img from 'gatsby-image'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import styles from '../../css/tour.module.css'

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  let mainImg = images[0].fluid
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
          {country}
        </h4>
        <div className={styles.details}>
          <h6>{days} days</h6>
          <h6>from: ${price}</h6>
        </div>
      </div>
    </div>
  </article>
}

export default Tour