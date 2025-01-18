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
        <section className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-8">
                <Link href="/" className="text-blue-400 hover:underline text-lg flex items-center">
                    {"<<"} Back to tasks table
                </Link>
                <div className="flex items-center space-x-3">
                    <Link
                        href={`/task/${task.id}/edit`}
                        className="bg-green-600 hover:bg-green-500 transition-colors rounded-md py-2 px-4 text-lg font-semibold text-white"
                    >
                        Edit
                    </Link>
                    <form action={deleteTask}>
                        <input type="hidden" name="id" value={task.id} />
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-500 transition-colors rounded-md py-2 px-4 text-lg font-semibold text-white"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-4xl font-bold">{task.title}</h2>
                    <StatusBadge status={task.status} />
                </div>
                <small className="text-gray-400 block mb-6">
                    Created on: {new Date(task.createdAt).toDateString()}
                </small>
                <p className="text-lg leading-relaxed">{task.description}</p>
            </div>
        </section>
    );
};

export default TaskDetailsPage;
