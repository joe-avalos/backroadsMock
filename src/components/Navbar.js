import React, { useState } from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'gatsby'

import styles from '../css/navbar.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => setIsOpen(!isOpen)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={'/'}>
            <img src={logo} alt="Backroads logo"/>
          </Link>
          <button
            type={'button'}
            className={styles.logoBtn}
            onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon}/>
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, idx) => (
            <a
              href={item.url}
              key={idx}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
