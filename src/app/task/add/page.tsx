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
