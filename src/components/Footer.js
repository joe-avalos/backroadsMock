import React from 'react'
import {Link} from 'gatsby'
import {FaCopyright} from 'react-icons/fa'

import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {links.map((item,idx)=>(
        <Link to={item.path} key={idx}>{item.text}</Link>
      ))}
    </div>
    <div className={styles.icons}>
      {socialIcons.map((item,idx)=>(
        <a href={item.url} key={idx} target="_blank" rel="noreferrer noopener">{item.icon}</a>
      ))}
    </div>
    <div className={styles.copyright}>
      copyright <FaCopyright /> boloyde travel company {new Date().getFullYear()} all rights reserved
    </div>
  </footer>
)

export default Footer
