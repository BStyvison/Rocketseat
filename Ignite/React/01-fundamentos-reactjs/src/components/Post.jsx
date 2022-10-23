import React from 'react'
import styles from './Post.module.css'



export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/BStyvison.png" alt="Avatar" />
          <div className={styles.authorInfor}>
            <strong>Brayan Styvison</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dataTime='2022-10-23 09:57:38'>Publicado há 1h</time>
      </header>
      
      
    </article>
  )
}

