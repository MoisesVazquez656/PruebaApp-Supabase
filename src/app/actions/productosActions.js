'use server'

import {createClient} from '../lib/supServer'
import {rivalidatePath} from 'next/cache'

export async function eliminarProducto(id) {
    const supabase = await createClient()

    const {error} = await supabase
    .from('producto')
    .delete()
}