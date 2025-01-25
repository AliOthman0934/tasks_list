// import React from 'react'
// import Link from "next/link"
// import StatusBadge from '@/components/StatusBadge'
// import { notFound } from 'next/navigation'
// import prisma from '@/utils/db'
// import { deleteTask } from '@/utils/actions'

// interface TaskDetailsPageProps {
//     params : {id:string}
// }

// const TaskDetailsPage = async ({params}: TaskDetailsPageProps) => {
//     const task = await prisma.task.findUnique({
//         where: {id: parseInt(params.id)}
//     })

//     if(!task) notFound();

//     return (
//         <section>
//             <div className='flex items-center justify-between'>
//                 <Link href="/" className='underline'>
//                     {"<<"} Back to tasks table
//                 </Link>
//                 <div className='flex items-center'>
//                     <Link href={`/task/${task.id}/edit`} className='bg-green-700 hover:bg-green-600 transition-colors rounded-lg py-1 px-2 me-3 text-xl'>
//                         Edit
//                     </Link>
//                     <form action={deleteTask}>
//                         <input type='hidden' name='id' value={task.id}/>
//                         <button type='submit' className='bg-red-700 hover:bg-red-600 transition-colors py-1 px-2 text-xl'>
//                             Delete
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             <div className='mt-16 p-5 rounded-lg bg-gray-600'>
//                 <div className='flex items-center justify-between'>
//                     <h2 className='font-bold text-3xl'>{task.title}</h2>
//                     <StatusBadge status={task.status} />
//                 </div>
//                 <small className='text-yellow-400'>
//                     {new Date(task.createdAt).toDateString()}
//                     <p className='mt-5 text-xl'>{task.description}</p>
//                 </small>
//             </div>
//         </section>
//     )
// }

// export default TaskDetailsPage

import React from 'react';
import Link from 'next/link';
import StatusBadge from '@/components/StatusBadge';
import { notFound } from 'next/navigation';
import prisma from '@/utils/db';
import { deleteTask } from '@/utils/actions';

interface TaskDetailsPageProps {
    params: { id: string };
}

const TaskDetailsPage = async ({ params }: TaskDetailsPageProps) => {
    const task = await prisma.task.findUnique({
        where: { id: parseInt(params.id) },
    });

    if (!task) notFound();

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-10">
                    <Link
                        href="/"
                        className="text-blue-400 hover:underline text-lg flex items-center"
                    >
                        <span className="mr-2">&larr;</span> Back to Tasks Table
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link
                            href={`/task/${task.id}/edit`}
                            className="bg-green-600 hover:bg-green-500 transition-all rounded-lg py-2 px-5 text-lg font-semibold shadow-md"
                        >
                            Edit
                        </Link>
                        <form action={deleteTask} className="inline-block">
                            <input type="hidden" name="id" value={task.id} />
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-500 transition-all rounded-lg py-2 px-5 text-lg font-semibold shadow-md"
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-4xl font-extrabold text-white">
                            {task.title}
                        </h2>
                        <StatusBadge status={task.status} />
                    </div>
                    <p className="text-gray-400 text-sm mb-8">
                        Created on: {new Date(task.createdAt).toDateString()}
                    </p>
                    <p className="text-lg leading-relaxed text-gray-200">
                        {task.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TaskDetailsPage;
