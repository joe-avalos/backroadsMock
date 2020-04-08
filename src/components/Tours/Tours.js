import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import TourList from './TourList'

const getTours = graphql`
	query{
		tours:allContentfulTour{
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

const Tours = () => {
  const {tours} = useStaticQuery(getTours)
  return <TourList tours={tours}/>}

export default Tours
