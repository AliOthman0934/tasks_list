// import Link from "next/link"
// import AddTasksForm from "@/components/AddTasksForm";

// function AddTaskPage() {
//     return (
//         <section>
//             <Link href="/" className="underline block mb-10">
//                 {"<<"} Back To Tasks Table
//             </Link>
//             <div className="w-2/3 mx-auto rounded-md p-5 bg-slate-800 bottom-2 border-gray-300">
//                 <h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
//                 <AddTasksForm/>
//             </div>
//         </section>
//     )
// }

// export default AddTaskPage

import Link from "next/link";
import AddTasksForm from "@/components/AddTasksForm";

function AddTaskPage() {
    return (
        <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
            <Link
                href="/"
                className="text-blue-400 hover:underline text-lg mb-10 flex items-center"
            >
                {"<<"} Back to Tasks Table
            </Link>
            <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-100">
                    Add Your Task
                </h1>
                <AddTasksForm />
            </div>
        </section>
    );
}

export default AddTaskPage;
