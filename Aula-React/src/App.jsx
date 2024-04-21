import Header from "./components/Header";
import Sidebar  from "./components/Sidebar";
import Post from "./components/Post";
import styles from "./App.module.css";

import "./global.css";

export default function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatar: "https://github.com/maryangelasoares.png",
        name: "Maryângela Soares",
        role: "FullStack Developer"
      },
      publishedAt: new Date("2024-04-02 19:20:00"),
      content: [
        { type: "paragraph", content: "Fala galera! 👋" },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu github. 🚀" },
        { type: "link", content: "https://github.com/maryangelasoares/FullStackRPV" },
        { type: "link", content: "#novoprojeto" }
      ]
    },
    {
      id: 2,
      author: {
        avatar: "https://github.com/maryangelasoares.png",
        name: "Maryângela Soares",
        role: "FullStack Developer"
      },
      publishedAt: new Date("2024-04-02 19:20:00"),
      content: [
        { type: "paragraph", content: "Fala galera! 👋" },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu github. 🚀" },
        { type: "link", content: "https://github.com/maryangelasoares/FullStackRPV" },
        { type: "link", content: "#novoprojeto" }
      ]
    },
    // [...]
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  publishedAt={post.publishedAt}
                  content={post.content}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}