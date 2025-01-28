// "use client";
// import { createTask } from "@/utils/actions";
// import { createTaskSchema } from "@/utils/validationSchema";
// import { toast } from "react-toastify";
// import { createTaskDto } from "@/utils/dtos";


// const AddTasksForm = () => {
//     const clientAction = async (formData: FormData): Promise<void> => {
//         // Extract form data
//         const title = formData.get("title")?.toString();
//         const description = formData.get("description")?.toString();

//         // Validate the input using Zod schema
//         const validation = createTaskSchema.safeParse({ title, description });
//         if (!validation.success) {
//             toast.error(validation.error.errors[0].message);
//             return; // Stop execution if validation fails
//         }

//         try {
//             // Call the server-side createTask function
//             await createTask({title,description} as createTaskDto);

//             // Provide user feedback
//             toast.success("Task added successfully!");
//         } catch (error) {
//             // Handle errors from createTask
//             console.error("Error creating task:", error);
//             toast.error("Failed to create task. Please try again.");
//         }
//     };

//     return (
//         <form
//             action={(formData) => clientAction(formData)}
//             className="flex flex-col gap-6"
//         >
//             <input
//                 type="text"
//                 placeholder="Task Title"
//                 name="title"
//                 className="p-2 text-xl rounded-md text-gray-950"
//             />
//             <textarea
//                 name="description"
//                 rows={5}
//                 placeholder="Task Description"
//                 className="p-2 text-xl rounded-md text-gray-950 resize-none"
//             />
//             <button
//                 type="submit"
//                 className="bg-cyan-300 text-black font-semibold text-xl rounded-md p-3 transition-colors"
//             >
//                 Add Task
//             </button>
//         </form>
//     );
// };

// export default AddTasksForm;


"use client";
import { createTask } from "@/utils/actions";
import { createTaskSchema } from "@/utils/validationSchema";
import { toast } from "react-toastify";
import { createTaskDto } from "@/utils/dtos";

const AddTasksForm = () => {
    const clientAction = async (formData: FormData): Promise<void> => {
        // Extract form data
        const title = formData.get("title")?.toString();
        const description = formData.get("description")?.toString();

        // Validate the input using Zod schema
        const validation = createTaskSchema.safeParse({ title, description });
        if (!validation.success) {
            toast.error(validation.error.errors[0].message);
            return; // Stop execution if validation fails
        }

        try {
            // Call the server-side createTask function
            await createTask({ title, description } as createTaskDto);

            // Provide user feedback
            toast.success("Task added successfully!");
        } catch (error) {
            // Handle errors from createTask
            console.error("Error creating task:", error);
            toast.error("Failed to create task. Please try again.");
        }
    };

    return (
        <form
            action={(formData) => clientAction(formData)}
            className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg mx-auto"
        >
            <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Task</h2>
            <input
                type="text"
                placeholder="Task Title"
                name="title"
                className="p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-gray-900"
            />
            <textarea
                name="description"
                rows={5}
                placeholder="Task Description"
                className="p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-gray-900 resize-none"
            />
            <button
                type="submit"
                className="bg-cyan-500 text-white font-semibold text-lg rounded-lg p-3 transition-colors hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:outline-none"
            >
                Add Task
            </button>
        </form>
    );
};

export default AddTasksForm;