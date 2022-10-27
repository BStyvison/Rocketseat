import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={style.comment}>
      <img src="https://github.com/BStyvison.png" alt="avatar" />

      <div className={style.commentBox}></div>
    </div>
  );
};
