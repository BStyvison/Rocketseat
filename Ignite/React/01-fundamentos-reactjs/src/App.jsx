import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";

import styles from "./app.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/BStyvison.png',
      name: 'Brayan Styvison',
      role: 'Desenvolvedor Full-Stack'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},

      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'https://www.linkedin.com/in/styvison/'},
        
    ],
    publisheAt: new Date('2022-04-11 13:28'),
  }, 
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diogo3g.png',
      name: 'Diogo Fernandes',
      role: 'CTO @rocketseat'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},

      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'https://www.linkedin.com/in/styvison/'},
        
    ],
    publisheAt: new Date('2022-04-09 20:28'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {posts.map(post => {
            <Post/>
          })}
        </main>
      </div>
    </>
  );
}
