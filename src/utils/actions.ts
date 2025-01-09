"use server";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function createTask(formData:FormData){
const title = formData.get("title")?.toString()
const description = formData.get("description")?.toString()

if(!title || !description) return console.log("Required")

await prisma.task.create({
    data:{
        title,description
    }
})
revalidatePath("/")
redirect("/")
}