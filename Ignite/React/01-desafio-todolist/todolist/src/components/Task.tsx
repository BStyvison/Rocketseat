import styles from "./Task.module.css"

import {useState} from "react"

export const Task = () => {

    const [task, setTask] = useState("")
    const [countTaskCreated, setCountTaskCreated] = useState(0)
    const [countTaskDone, setCountTaskDone] = useState(0)

    return (
        <main>
            <header>
                <div className={styles.CountTaskCreated}>
                    <h3>Tarefas Criadas</h3>
                    <div>{countTaskCreated}</div>
                </div>

                <div className={styles.CountTaskDone}>
                <h3>Concluídas</h3>
                    <div>{countTaskDone}</div>
                </div>
            </header>
        </main>
    )
}
