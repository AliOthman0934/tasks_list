import React from 'react'
import Link from "next/link"
import StatusBadge from '@/components/StatusBadge'
import { notFound } from 'next/navigation'
import prisma from '@/utils/db'

interface TaskDetailsPageProps {
    params : {id:string}
}

const TaskDetailsPage = async ({params}: TaskDetailsPageProps) => {
    const task = await prisma.task.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!task) notFound();

    return (
        <section>
            <div>
                <Link href="/">
                    {"<<"} Back to tasks table
                </Link>
                <div>
                    <Link href={`/task/${task.id}/edit`}>
                        Edit
                    </Link>
                    <form>
                        <button>
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <div>
                    <h2>{task.title}</h2>
                    <StatusBadge status={task.status}/>
                </div>
                <small>
                    {new Date(task.createdAt).toDateString()}
                    <p>{task.description}</p>
                </small>
            </div>
        </section>
    )
}

export default TaskDetailsPage