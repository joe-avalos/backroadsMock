import React from 'react'

import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => (
  <section className={styles.contact}>
    <Title title={'contact'} subtitle={'us'}/>
    <div className={styles.center}>
      <form action="https://formspree.io/boloyde@gmail.com" method="POST">
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" className={styles.formControl} placeholder="John Doe"/>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" className={styles.formControl} placeholder="email@email.com"/>
        </div>
        <div>
          <label htmlFor="message">message</label>
          <textarea name="message" id="message" placeholder="hello there" rows="10" className={styles.formControl}/>
        </div>
        <div>
          <input type="submit" value="submit" className={styles.submit}/>
        </div>
      </form>
    </div>
  </section>
)

export default Contact
