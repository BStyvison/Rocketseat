import styles from "./NewTask.module.css"

import plus from "../assets/plus.png"

export const NewTask = () => {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar
                <img src={plus} alt="do" />
            </button>
        </form>
    )
}