import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/Layout"
import Banner from '../components/Banner'
import styles from '../css/error.module.css'

const NotFoundPage = () => (
  <Layout>
    <header className={styles.error}>
      <Banner title="Oops it's a dead end">
        <Link to={'/'} className="btn-white">Back to home page</Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
