import './App.css'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from "./app.module.css";
import "./global.css";
import { Task } from './components/Task';

export function App() {

  return (
    <div>
      <Header/>
      <NewTask/>
      <Task/>
    </div>
  )
}

