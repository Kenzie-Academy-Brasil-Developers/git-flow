import { TodoForm } from "../../components/TodoForm"
import { TodoList } from "../../components/TodoList"

export const HomePage = () => {
    return(
        <main>
            <TodoForm />
            <TodoList />
        </main>
    )
}