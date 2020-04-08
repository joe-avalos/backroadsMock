import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from "../components/Layout"
import Banner from '../components/Banner'
import styles from '../css/error.module.css'

const NotFoundPage = () => (
  <Layout>
    <header className={styles.error}>
      <Banner title="Oops it's a dead end">
        <AniLink fade to={'/'} className="btn-white">Back to home page</AniLink>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
