"use server";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createTaskDto } from "./dtos";


export async function createTask(newTask:createTaskDto){
// const title = formData.get("title")?.toString()
// const description = formData.get("description")?.toString()

// if(!newTask.title || !newTask.description) return console.log("Required")
if(typeof newTask.title !== "string" || newTask.title.length < 2) return;
if(typeof newTask.description !== "string" || newTask.description.length < 4) return;
await prisma.task.create({
    data:{
        title :newTask.title,
        description :newTask.description
    }
})
revalidatePath("/")
redirect("/")
}