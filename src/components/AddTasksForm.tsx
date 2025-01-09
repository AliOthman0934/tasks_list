"use client"
import { createTask } from "@/utils/actions"

const AddTasksForm = () => {
    return (
        <form action={createTask} className="flex flex-col gap-6">
                    <input type="text" placeholder="Task Title" name="title" className="p-2 text-xl rounded-md text-gray-950"/>
                    <textarea name="description" rows={5} placeholder="Task Description" className="p-2 text-xl rounded-md text-gray-950 resize-none"/>
                    <button type="submit" className="bg-cyan-300 text-black font-semibold text-xl rounded-md p-3 transition-colors" >Add Task</button>
                </form>
    )
}

export default AddTasksForm