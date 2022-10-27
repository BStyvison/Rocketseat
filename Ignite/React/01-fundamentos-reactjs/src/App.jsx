import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

import styles from "./app.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
        <Post
        author="Brayan Styvison"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus ipsam beatae illo qui quod eum atque officia! Eligendi debitis eos ut. Accusantium expedita debitis ratione in explicabo mollitia error."
      />

  {/*       <Post
        author="Brayan Styvison"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus ipsam beatae illo qui quod eum atque officia! Eligendi debitis eos ut. Accusantium expedita debitis ratione in explicabo mollitia error."
      /> */}
        </main>
      </div>
    </>
  );
}