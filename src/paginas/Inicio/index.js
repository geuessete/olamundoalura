import posts from "json/posts.json";
import Post from "componentes/PostCard";
import styles from "./Inicio.module.css";

export default function Inicio(){
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}