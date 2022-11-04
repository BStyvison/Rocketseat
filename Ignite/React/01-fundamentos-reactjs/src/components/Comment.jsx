import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={style.comment}>
      <img src="https://github.com/BStyvison.png" alt="avatar" />

      <div className={style.commentBox}>
        <div className={style.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Brayan Styvison</strong>
              <time title="23 de outubro ás 09:59" dataTime="2022-10-23 09:57:38"></time>
            </div>
          </header>
          <p>Muito bom dev, parabéns👏👏</p>
        </div>

        <footer>
          Aplaudir
        </footer>
      </div>
      
    </div>
  );
};
