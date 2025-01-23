// import prisma from "@/utils/db"
// import Link from "next/link"
// import { notFound } from "next/navigation"

// interface EditTaskPgaeProps {
//     params : {id :string}
// }

// const EditeTaskPgae = async ({params}:EditTaskPgaeProps) => {
//     const task = await prisma.task.findUnique({
//         where : {id :parseInt(params.id)}
//     })
//     if(!task)notFound()
//     return (
//     <section>
//         <Link href={`task/${task.id}`}>
//             {"<<"} Back To Task Details
//         </Link>
//         <div>
//             <h1>Edit Task</h1>
//             <form action={""}>
//                 <input type="text" name="title" placeholder="Task Title" value={task.title}/>
//                 <select name="status" defaultValue={task.status}>
//                     <option value={"ToDo"}>TODO</option>
//                     <option value={"IN_PROGRESS"}>IN_PROGRESS</option>
//                     <option value={"COMPLETED"}>COMPLETED</option>
//                 </select>
//                 <textarea name="description" id="" rows={5} placeholder="Task Description" defaultValue={task.description}></textarea>
//                 <button type="submit">
//                     Edit Task
//                 </button>
//             </form>
//         </div>
//     </section>
//     )
// }

// export default EditeTaskPgae


import prisma from "@/utils/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editTask } from "@/utils/actions";

interface EditTaskPgaeProps {
    params: { id: string };
}

const EditeTaskPgae = async ({ params }: EditTaskPgaeProps) => {
    const task = await prisma.task.findUnique({
        where: { id: parseInt(params.id) },
    });
    if (!task) notFound();
    return (
        <section className="min-h-screen bg-gray-900 text-white py-10 px-6">
            <Link
                href={`task/${task.id}`}
                className="text-blue-400 hover:underline mb-6 inline-block text-lg"
            >
                {"<<"} Back To Task Details
            </Link>
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-8">Edit Task</h1>
                <form action={editTask} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                            Task Title
                        </label>
                        <input type="hidden" value={task.id} name="id"/>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Task Title"
                            defaultValue={task.title}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium mb-2">
                            Task Status
                        </label>
                        <select
                            name="status"
                            id="status"
                            defaultValue={task.status}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="ToDo">TODO</option>
                            <option value="IN_PROGRESS">IN_PROGRESS</option>
                            <option value="COMPLETED">COMPLETED</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium mb-2"
                        >
                            Task Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            rows={5}
                            placeholder="Task Description"
                            defaultValue={task.description}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-md font-semibold shadow-md transition-colors"
                    >
                        Edit Task
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EditeTaskPgae;
