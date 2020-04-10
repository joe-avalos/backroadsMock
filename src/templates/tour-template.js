import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Day from '../components/SingleTour/Day'
import styles from '../css/template.module.css'


const TourTemplate = ({ data }) => {
  const { name, price, country, days, start, description: { description }, images, journey } = data.tour
  const [mainImg, ...tourImgs] = images
  return <Layout>
    <StyledHero img={mainImg.fluid}/>
    <section className={styles.template}>
      <div className={styles.center}>
        <div className={styles.images}>
          {tourImgs.map((item, idx) => (
            <Img className={styles.image} fluid={item.fluid} key={idx} alt="single tour"/>
          ))}
        </div>
        <h2>{name}</h2>
        <div className={styles.info}>
          <p>
            <FaMoneyBillWave className={styles.icon}/>
            Starting from: ${price}
          </p>
          <p>
            <FaMap className={styles.icon}/>
            {country}
          </p>
        </div>
        <h4>Starts on: {start}</h4>
        <h4>duration: {days} days</h4>
        <p className={styles.desc}>{description}</p>
        <h2>Daily schedule</h2>
        <div className={styles.journey}>
          {journey.map((item, idx) => (
            <Day info={item.info} day={item.day} key={idx} />
          ))}
        </div>
        <AniLink to={'/tours'} className="btn-primary">back to tours</AniLink>
      </div>
    </section>
  </Layout>
}

export const getTourQuery = graphql`
	query($slug:String!){
		tour:contentfulTour(slug:{eq:$slug}){
			name
			price
			country
			days
			start(formatString:"dddd MMMM Do, YYYY")
			description{
				description
			}
			journey{
				day
				info
			}
			images{
				fluid{
					...GatsbyContentfulFluid_withWebp
				}
			}
		}
	}
`

export default TourTemplate
