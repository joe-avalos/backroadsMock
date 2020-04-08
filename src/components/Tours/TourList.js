import React from 'react'

import styles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../Title'

const TourList = ({ tours }) => {
  //const [tourList, setTourList] = useState(tours.edges)
  //const [sortedTours, setSortedTours] = useState(tours.edges)
  
  return (
    <section className={styles.tours}>
      <Title title={'our'} subtitle={'tours'} />
      <div className={styles.center}>
        {tours.edges.map(({node})=>(
          <Tour tour={node} key={node.contentful_id} />
        ))}
      </div>
    </section>
  )
}

export default TourList
