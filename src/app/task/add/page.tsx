import Link from "next/link"

function AddTaskPage() {
    return (
        <section>
            <Link href="/" className="underline block mb-10">
                {"<<"} Back To Tasks Table
            </Link>
            <div className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 bottom-2 border-gray-300">
                <h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
                <form action="" className="flex flex-col gap-6">
                    <input type="text" placeholder="Task Title" name="title" className="p-2 text-xl rounded-md text-gray-950"/>
                    <textarea name="description" rows={5} placeholder="Task Description" className="p-2 text-xl rounded-md text-gray-950 resize-none"/>
                    <button type="submit" className="bg-cyan-300 text-black font-semibold text-xl rounded-md p-3 transition-colors" >Add Task</button>
                </form>
            </div>
        </section>
    )
}

export default AddTaskPage