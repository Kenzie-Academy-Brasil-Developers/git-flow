
import { useContext } from "react"
import { TodoContext } from "../../providers/TodoContext"
import { useForm } from "react-hook-form"
import styles from "./style.module.scss";

export const TodoForm = () => {
    const { addTodo } = useContext(TodoContext);

    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        addTodo(formData);
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("title")} />
            <textarea {...register("content")}></textarea>
            <button type="submit">Cadastrar</button>
        </form>
    )
}