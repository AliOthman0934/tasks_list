import prisma from "@/utils/db"
import Link from "next/link"
import { notFound } from "next/navigation"

interface EditTaskPgaeProps {
    params : {id :string}
}

const EditeTaskPgae = async ({params}:EditTaskPgaeProps) => {
    const task = await prisma.task.findUnique({
        where : {id :parseInt(params.id)}
    })
    if(!task)notFound()
    return (
    <section>
        <Link href={`task/${task.id}`}>
            {"<<"} Back To Task Details
        </Link>
    </section>
    )
}

export default EditeTaskPgae