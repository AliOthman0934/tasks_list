import Link from "next/link"
import AddTasksForm from "@/components/AddTasksForm";

function AddTaskPage() {
    return (
        <section>
            <Link href="/" className="underline block mb-10">
                {"<<"} Back To Tasks Table
            </Link>
            <div className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 bottom-2 border-gray-300">
                <h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
                <AddTasksForm/>
            </div>
        </section>
    )
}

export default AddTaskPage