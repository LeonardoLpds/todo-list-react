import "./Home.scss"

import TodoTopics from "../../components/TodoTopics/TodoTopics";
import TodoList from "../../components/TodoList/TodoList";

export default function Home() {
  return <section className="md:flex h-screen">
    <TodoTopics />
    <TodoList />
  </section>
}