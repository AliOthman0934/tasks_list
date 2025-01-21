"use server";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createTaskDto } from "./dtos";
import { Status } from "@prisma/client";


export async function createTask(newTask:createTaskDto){
// const title = formData.get("title")?.toString()
// const description = formData.get("description")?.toString()

// if(!newTask.title || !newTask.description) return console.log("Required")
if(typeof newTask.title !== "string" || newTask.title.length < 2) return;
if(typeof newTask.description !== "string" || newTask.description.length < 4) return;

try {
    await prisma.task.create({
        data:{
            title :newTask.title,
            description :newTask.description
        }
    })
} catch (error) {
    throw new Error("Could not create the task, please try agin");
    console.log(error)
}

revalidatePath("/")
redirect("/")
}

export async function deleteTask(formData:FormData){
    const id = formData.get("id")?.toString();

    if(!id) return

    try {
        await prisma.task.delete({where: {id: parseInt(id)}})
    } catch (error) {
        throw new Error("Could not delete the task, please try agin");
        console.log(error)
    }

    revalidatePath("/");
    redirect("/");
}

export async function editTask(formData:FormData){
    const title = formData.get("title")?.toString()
    const description = formData.get("description")?.toString()
    const status = formData.get("status") as Status
    const id = formData.get("id")?.toString()

    if(typeof title !== "string" || title.length < 2) return
    if(typeof description !== "string" || description.length < 4) return
    if(typeof id !== "string") return
    if(!status) return

    try {
        await prisma.task.update({
            where : {id : parseInt(id)},
            data : {title,description,status}
        })
    } catch (error) {
        throw new Error("Could not update teh task, please try agin")
        console.log(error)
    }

    revalidatePath("/")
    revalidatePath(`/task/${id}`)
    redirect(`/task/${id}`)
}