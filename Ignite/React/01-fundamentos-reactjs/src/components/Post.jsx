import React from "react";
import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar}
            src="https://github.com/BStyvison.png"
            alt="Avatar"
          />
          <div className={styles.authorInfor}>
            <strong>Brayan Styvison</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de outubro ás 09:59" dataTime="2022-10-23 09:57:38">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉{' '}<a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> {' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  );
};
