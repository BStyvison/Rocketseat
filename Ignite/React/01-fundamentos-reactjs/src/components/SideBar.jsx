import { PencilLine } from "phosphor-react";

import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/BStyvison.png"
          alt="My profile"
        />
        <strong>Brayan Styvison</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine  size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
