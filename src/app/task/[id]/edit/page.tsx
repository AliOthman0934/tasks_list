import prisma from "@/utils/db"
import Link from "next/link"
import { notFound } from "next/navigation"

interface EditTaskPgaeProps {
    params : {id :string}
}

const EditeTaskPgae = async ({params}:EditTaskPgaeProps) => {
    const task = await prisma.task.findUnique({
        where : {id :parseInt(params.id)}
    })
    if(!task)notFound()
    return (
    <section>
        <Link href={`task/${task.id}`}>
            {"<<"} Back To Task Details
        </Link>
        <div>
            <h1>Edit Task</h1>
            <form action={""}>
                <input type="text" name="title" placeholder="Task Title" value={task.title}/>
                <select name="status" defaultValue={task.status}>
                    <option value={"ToDo"}>TODO</option>
                    <option value={"IN_PROGRESS"}>IN_PROGRESS</option>
                    <option value={"COMPLETED"}>COMPLETED</option>
                </select>
                <textarea name="description" id="" rows={5} placeholder="Task Description" defaultValue={task.description}></textarea>
                <button type="submit">
                    Edit Task
                </button>
            </form>
        </div>
    </section>
    )
}

export default EditeTaskPgae