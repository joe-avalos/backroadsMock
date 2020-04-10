import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Banner from '../components/Banner'
import styles from '../css/error.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title={'Error 404'} />
    <header className={styles.error}>
      <Banner title="Oops it's a dead end">
        <AniLink fade to={'/'} className="btn-white">Back to home page</AniLink>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
