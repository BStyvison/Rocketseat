import styles from "./Header.module.css";

import logo from "../assets/logo.png";
import todo from "../assets/todo.png";

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <img src={todo} alt="todo" />
        </header>
    )
}