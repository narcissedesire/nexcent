// import { create } from '@/api/create_board';
'use server'

import { revalidatePath } from "next/cache"
import { db } from "./db"

export async function Ajout_post(FormData) {
    const names = FormData.get('names')
    const email = FormData.get('email')
    // console.log('Donner name : ',names)

    try {
        await db.user.create({
            data: {
                username: names,
                email
            }
        })
    } catch (error) {
        console.log('Erreur : ', error)
    }

    revalidatePath('/')

    
} 