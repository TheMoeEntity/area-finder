import { createSupabaseServerClient, readUserSession } from "@/helpers/supabase";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, _res: NextResponse) {

    const { firstName, lastName, phone, location, username } = await req.json()

    const itemToUpdate = {
        firstName, lastName, phone, location, username
    }

    const supabase = await createSupabaseServerClient()
    try {
        const user = await readUserSession()

        const { error } = await supabase.auth.updateUser({
            data: { ...user.data.user?.user_metadata, ...itemToUpdate }
        })
        const errMessage = error?.message
        if (error) {
            return NextResponse.json({ success: false, error: errMessage }, { status: 400 });
        }
        revalidatePath('/')
        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {

        return NextResponse.json({ error: "Failed to send review: " + error }, { status: 500 });
    }
}